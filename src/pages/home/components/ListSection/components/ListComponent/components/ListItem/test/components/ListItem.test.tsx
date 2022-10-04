import type { ComponentProps } from 'react'
import { render } from '@testing-library/react'
import { ListItem } from '../../ListItem.component'
import { getTopSubredditFixture } from '@fixtures'
import '@testing-library/jest-dom'

const setup = (properties: ComponentProps<typeof ListItem>) =>
  render(<ListItem {...properties} />)

describe('ListItem component', () => {
  const [mockedPublication] = getTopSubredditFixture()

  it('renders successfully', () => {
    const { getByRole, getByLabelText } = setup({ publication: mockedPublication })

    const item = getByLabelText('post')
    expect(item).toBeInTheDocument()

    const link = getByRole('link', { name: `open ${mockedPublication.title} post` })
    expect(link).toBeInTheDocument()
    expect(link.getAttribute('href')).toBe(`https://www.reddit.com/${mockedPublication.permalink}`)

    const thumbnail = getByRole('img', { name: 'thumbnail' })
    expect(thumbnail).toBeInTheDocument()
    expect(thumbnail.getAttribute('src')).toBe(mockedPublication.thumbnail)

    const publicationDate = getByLabelText('publication date')
    expect(publicationDate).toBeInTheDocument()
    expect(publicationDate.textContent).toMatch(/^Published \d* days ago$/)

    const title = getByLabelText('post title')
    expect(title).toBeInTheDocument()
    expect(title).toHaveTextContent(mockedPublication.title)

    const author = getByLabelText('post author')
    expect(author).toBeInTheDocument()
    expect(author.textContent).toMatch(`Published by ${mockedPublication.author}`)

    const score = getByLabelText('post score')
    expect(score).toBeInTheDocument()
    expect(score).toHaveTextContent(`Score: ${mockedPublication.score}`)

    const comments = getByLabelText('post comments amount')
    expect(comments).toBeInTheDocument()
    expect(comments).toHaveTextContent(`Comments: ${mockedPublication.num_comments}`)
  })

  it('renders default thumbnail successfully', () => {
    const { getByRole, queryByRole, getByLabelText } = setup({ publication: { ...mockedPublication, thumbnail: '' } })

    const item = getByLabelText('post')
    expect(item).toBeInTheDocument()

    const link = getByRole('link', { name: `open ${mockedPublication.title} post` })
    expect(link).toBeInTheDocument()
    expect(link.getAttribute('href')).toBe(`https://www.reddit.com/${mockedPublication.permalink}`)

    const thumbnail = queryByRole('img', { name: 'thumbnail' })
    expect(thumbnail).not.toBeInTheDocument()

    const defaultThumbnail = getByLabelText('reddit icon')
    expect(defaultThumbnail).toBeInTheDocument()

    const publicationDate = getByLabelText('publication date')
    expect(publicationDate).toBeInTheDocument()
    expect(publicationDate.textContent).toMatch(/^Published \d* days ago$/)

    const title = getByLabelText('post title')
    expect(title).toBeInTheDocument()
    expect(title).toHaveTextContent(mockedPublication.title)

    const author = getByLabelText('post author')
    expect(author).toBeInTheDocument()
    expect(author.textContent).toMatch(`Published by ${mockedPublication.author}`)

    const score = getByLabelText('post score')
    expect(score).toBeInTheDocument()
    expect(score).toHaveTextContent(`Score: ${mockedPublication.score}`)

    const comments = getByLabelText('post comments amount')
    expect(comments).toBeInTheDocument()
    expect(comments).toHaveTextContent(`Comments: ${mockedPublication.num_comments}`)
  })
})
