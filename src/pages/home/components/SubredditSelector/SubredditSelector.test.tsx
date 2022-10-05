import type { ComponentProps } from 'react'
import { render, within } from '@testing-library/react'
import user from '@testing-library/user-event'
import { ALLOWED_SUBREDDITS } from '@config'
import { SubredditSelector } from './SubredditSelector.component'
import '@testing-library/jest-dom'

const setup = (properties: ComponentProps<typeof SubredditSelector>) =>
  render(<SubredditSelector {...properties} />)

const capitalizeWord = (rawWord: string) => rawWord.slice(0, 1).toUpperCase().concat(rawWord.slice(1))

describe('SubredditSelector component', () => {
  const subredditsList = ALLOWED_SUBREDDITS
  const onChange = jest.fn()

  it('renders successfully with the first subreddit selected', () => {
    const { getAllByRole } = setup({ subredditsList, onChange })

    const [newSelector, topSelector, hotSelector, controversialSelector] = getAllByRole('listitem')

    expect(newSelector).toBeInTheDocument()
    expect(newSelector).toHaveTextContent(capitalizeWord(subredditsList[0]))
    expect(newSelector.getAttribute('aria-pressed')).toBe('true')

    expect(topSelector).toBeInTheDocument()
    expect(topSelector).toHaveTextContent(capitalizeWord(subredditsList[1]))
    expect(topSelector.getAttribute('aria-pressed')).toBe('false')

    expect(hotSelector).toBeInTheDocument()
    expect(hotSelector).toHaveTextContent(capitalizeWord(subredditsList[2]))
    expect(hotSelector.getAttribute('aria-pressed')).toBe('false')

    expect(controversialSelector).toBeInTheDocument()
    expect(controversialSelector).toHaveTextContent(capitalizeWord(subredditsList[3]))
    expect(controversialSelector.getAttribute('aria-pressed')).toBe('false')
  })

  it('changes selection when it is tapped', async () => {
    const { getAllByRole } = setup({ subredditsList, onChange })

    const [newSelector, topSelector, hotSelector, controversialSelector] = getAllByRole('listitem')

    // Initial status

    expect(newSelector.getAttribute('aria-pressed')).toBe('true')
    expect(topSelector.getAttribute('aria-pressed')).toBe('false')
    expect(hotSelector.getAttribute('aria-pressed')).toBe('false')
    expect(controversialSelector.getAttribute('aria-pressed')).toBe('false')

    // Selecting the second option

    const topSelectorLabel = within(topSelector).getByText(capitalizeWord(subredditsList[1]))
    await user.click(topSelectorLabel)
    expect(newSelector.getAttribute('aria-pressed')).toBe('false')
    expect(topSelector.getAttribute('aria-pressed')).toBe('true')
    expect(hotSelector.getAttribute('aria-pressed')).toBe('false')
    expect(controversialSelector.getAttribute('aria-pressed')).toBe('false')
    expect(onChange).toHaveBeenCalledWith(subredditsList[1])

    // Selecting the third option

    const hotSelectorLabel = within(hotSelector).getByText(capitalizeWord(subredditsList[2]))
    await user.click(hotSelectorLabel)
    expect(newSelector.getAttribute('aria-pressed')).toBe('false')
    expect(topSelector.getAttribute('aria-pressed')).toBe('false')
    expect(hotSelector.getAttribute('aria-pressed')).toBe('true')
    expect(controversialSelector.getAttribute('aria-pressed')).toBe('false')
    expect(onChange).toHaveBeenCalledWith(subredditsList[2])

    // Selecting the fourth option

    const controversialSelectorLabel = within(controversialSelector).getByText(capitalizeWord(subredditsList[3]))
    await user.click(controversialSelectorLabel)
    expect(newSelector.getAttribute('aria-pressed')).toBe('false')
    expect(topSelector.getAttribute('aria-pressed')).toBe('false')
    expect(hotSelector.getAttribute('aria-pressed')).toBe('false')
    expect(controversialSelector.getAttribute('aria-pressed')).toBe('true')
    expect(onChange).toHaveBeenCalledWith(subredditsList[3])

    // Selecting the initial option

    const newSelectorLabel = within(newSelector).getByText(capitalizeWord(subredditsList[0]))
    await user.click(newSelectorLabel)
    expect(newSelector.getAttribute('aria-pressed')).toBe('true')
    expect(topSelector.getAttribute('aria-pressed')).toBe('false')
    expect(hotSelector.getAttribute('aria-pressed')).toBe('false')
    expect(controversialSelector.getAttribute('aria-pressed')).toBe('false')
    expect(onChange).toHaveBeenCalledWith(subredditsList[0])
  })
})
