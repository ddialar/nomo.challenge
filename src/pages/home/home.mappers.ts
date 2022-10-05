import type { RawSubredditPayload } from './home.types'

export const mapSubredditsFromRawToDomain = (payload: RawSubredditPayload) =>
  payload.data.children.map<Publication>(({ data }) => ({
    id: data.id,
    thumbnail: data.thumbnail,
    created: data.created,
    title: data.title,
    author: data.author,
    score: data.score,
    num_comments: data.num_comments,
    permalink: data.permalink
  }))
