import { rest } from 'msw'
import { SUBREDDIT_URLS } from '@config'
import {
  getRawNewSubredditFixture,
  getRawTopSubredditFixture,
  getRawHotSubredditFixture,
  getRawControversialSubredditFixture
} from '@fixtures'

export const retrieveNewSubredditsResponse = rest.get(SUBREDDIT_URLS.new, (req, res, ctx) => {
  return res(
    ctx.status(200),
    ctx.json(getRawNewSubredditFixture())
  )
})

export const retrieveTopSubredditsResponse = rest.get(SUBREDDIT_URLS.top, (req, res, ctx) => {
  return res(
    ctx.status(200),
    ctx.json(getRawTopSubredditFixture())
  )
})

export const retrieveHotSubredditsResponse = rest.get(SUBREDDIT_URLS.hot, (req, res, ctx) => {
  return res(
    ctx.status(200),
    ctx.json(getRawHotSubredditFixture())
  )
})

export const retrieveControversialSubredditsResponse = rest.get(SUBREDDIT_URLS.controversial, (req, res, ctx) => {
  return res(
    ctx.status(200),
    ctx.json(getRawControversialSubredditFixture())
  )
})

export const handlers = [
  retrieveNewSubredditsResponse,
  retrieveTopSubredditsResponse,
  retrieveHotSubredditsResponse,
  retrieveControversialSubredditsResponse
]
