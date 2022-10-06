import type { FC } from 'react'
import { PageLayout } from '@layouts'
import { LoadingScreen, ErrorScreen } from '@components'
import { ListSection, SubredditSelector } from './components'
import { ALLOWED_SUBREDDITS, SUBREDDIT_URLS } from '@config'
import { useSubreddits } from './home.hooks'

export const HomePage: FC = () => {
  const { subreddits, setSubredditUrl, isLoading, error } = useSubreddits(SUBREDDIT_URLS.new)

  const selectSubreddit = (subreddit: string) => {
    setSubredditUrl(SUBREDDIT_URLS[subreddit as AvailabelSubreddits])
  }

  return (
    <PageLayout>
      <SubredditSelector subredditsList={ALLOWED_SUBREDDITS} onChange={selectSubreddit} />
      { isLoading && <LoadingScreen /> }
      { error && <ErrorScreen /> }
      { !isLoading && subreddits && <ListSection publications={subreddits} /> }
    </PageLayout>
  )
}
