import type { FC } from 'react'
import { PageLayout } from '@layouts'
import { ListSection, SubredditSelector } from './components'
import { getTopSubredditFixture } from '@fixtures'
import { ALLOWED_SUBREDDITS } from '@config'

export const HomePage: FC = () => {
  return (
    <PageLayout>
      <SubredditSelector subredditsList={ALLOWED_SUBREDDITS} onChange={() => {}} />
      <ListSection publications={getTopSubredditFixture()} />
    </PageLayout>
  )
}
