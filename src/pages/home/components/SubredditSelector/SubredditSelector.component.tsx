import { ChangeEvent, FC, useState } from 'react'
import {
  SubredditSelectorContainer,
  SubredditSelectorList,
  SubredditSelectorListItem
} from './SubredditSelector.styled'

interface Props {
  subredditsList: Array<string>
  onChange: (selectedOption: string) => void
}

export const SubredditSelector: FC<Props> = ({ subredditsList, onChange }) => {
  const [selectedOption, setSelectedOption] = useState(subredditsList[0])

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value)
    onChange(event.target.value)
  }

  return (
    <SubredditSelectorContainer>
      <SubredditSelectorList>
        {
          subredditsList.map(subreddit =>
            <SubredditSelectorListItem
              key={`subreddit ${subreddit}`}
              aria-label={`select ${subreddit} subreddits`}
              aria-pressed={selectedOption === subreddit}
            >
              <input
                type='radio'
                name='subredditSelector'
                id={subreddit}
                value={subreddit}
                checked={selectedOption === subreddit}
                onChange={handleOnChange}
              />
              <label htmlFor={subreddit}>
                {subreddit.slice(0, 1).toUpperCase().concat(subreddit.slice(1))}
              </label>
            </SubredditSelectorListItem>
          )
        }
      </SubredditSelectorList>
    </SubredditSelectorContainer>
  )
}
