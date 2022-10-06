import { useState } from 'react'
import useSWR from 'swr'
import { mapSubredditsFromRawToDomain } from './home.mappers'

const fetcher = async (subredditUrl: string): Promise<Array<Publication> | undefined> => {
  const result = await fetch(subredditUrl).then(res => res.json())
  return result ? mapSubredditsFromRawToDomain(result) : undefined
}

export const useSubreddits = (initialSubredditsUrl: string) => {
  const [subredditUrl, setSubredditUrl] = useState(initialSubredditsUrl)
  const { data: subreddits, error } = useSWR(subredditUrl, fetcher)

  return {
    subreddits,
    setSubredditUrl,
    isLoading: !error && !subreddits,
    error
  }
}
