import { render, within } from '@testing-library/react'
import user from '@testing-library/user-event'
import { rest } from 'msw'
import { SWRConfig } from 'swr'
import { HomePage } from './home.page'
import { SUBREDDIT_URLS } from '@config'
import { getHotSubredditFixture, getNewSubredditFixture } from '@fixtures'
import { mswServer } from '@mockServiceWorker'
import '@testing-library/jest-dom'

const setup = () => render(
  <SWRConfig value={{ provider: () => new Map() }}>
    <HomePage />
  </SWRConfig>
)

describe('Home page', () => {
  it('renders successfully', async () => {
    const { getByLabelText, findAllByRole, getByText } = setup()

    // Subreddit selectors

    const subredditSelectorLabels = Object.keys(SUBREDDIT_URLS)
    subredditSelectorLabels.forEach(selectorKey => {
      const selector = getByLabelText(`select ${selectorKey} subreddits`)
      expect(selector).toBeInTheDocument()
    })

    // Listed posts

    const expectedPosts = getNewSubredditFixture()
    const listedPosts = await findAllByRole('listitem', { name: 'post' })
    expect(listedPosts).toHaveLength(expectedPosts.length)
    expectedPosts.forEach(post => {
      const displayedPost = getByText(post.title)
      expect(displayedPost).toBeInTheDocument()
    })
  })

  it('switches between subreddits successfully', async () => {
    const { findAllByRole, getByText, getByLabelText } = setup()

    // Initial posts loaded by default

    const expectedDefaultPosts = getNewSubredditFixture()
    const defaultListedPosts = await findAllByRole('listitem', { name: 'post' })
    expect(defaultListedPosts).toHaveLength(expectedDefaultPosts.length)
    expectedDefaultPosts.forEach(post => {
      const displayedPost = getByText(post.title)
      expect(displayedPost).toBeInTheDocument()
    })

    // Getting the wanted selector

    const selector = getByLabelText('select hot subreddits')
    await user.click(within(selector).getByText('Hot'))

    // New loaded posts

    const expectedNewPosts = getHotSubredditFixture()
    const newListedPosts = await findAllByRole('listitem', { name: 'post' })
    expect(newListedPosts).toHaveLength(expectedNewPosts.length)
    expectedNewPosts.forEach(post => {
      const displayedPost = getByText(post.title)
      expect(displayedPost).toBeInTheDocument()
    })
  })

  it('renders the loading screen', async () => {
    mswServer.use(rest.get(SUBREDDIT_URLS.new, (_, res, ctx) => {
      return res(
        ctx.status(404)
      )
    }))
    const { findByText } = setup()

    const loading = await findByText('Loading...')
    expect(loading).toBeInTheDocument()
  })

  it('renders the error screen', async () => {
    mswServer.use(rest.get(SUBREDDIT_URLS.new, (_, res, ctx) => {
      return res(
        ctx.status(500)
      )
    }))

    const { findByText } = setup()
    const error = await findByText('There was an error loading data')
    expect(error).toBeInTheDocument()
  })
})
