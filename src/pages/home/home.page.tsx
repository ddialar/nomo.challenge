import type { FC } from 'react'
import { PageLayout } from '@layouts'
import { ListSection, SubredditSelector } from './components'
// import { getTopSubredditFixture } from '@fixtures'
import { ALLOWED_SUBREDDITS, SUBREDDIT_URLS } from '@config'
import { useSubreddits } from './home.hooks'

export const HomePage: FC = () => {
  // const { subreddits, setSubredditUrl, isLoading, error } = useSubreddits(SUBREDDIT_URLS.new)
  const { subreddits, setSubredditUrl } = useSubreddits(SUBREDDIT_URLS.new)

  const selectSubreddit = (subreddit: string) => {
    console.log({ selectedSubreddit: subreddit, selectedUrl: SUBREDDIT_URLS[subreddit as AvailabelSubreddits] })
    setSubredditUrl(SUBREDDIT_URLS[subreddit as AvailabelSubreddits])
  }

  return (
    <PageLayout>
      <SubredditSelector subredditsList={ALLOWED_SUBREDDITS} onChange={selectSubreddit} />
      {/* <ListSection publications={getTopSubredditFixture()} /> */}
      <ListSection publications={subreddits || []} />
    </PageLayout>
  )
}
