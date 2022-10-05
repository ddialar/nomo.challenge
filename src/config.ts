export const ALLOWED_SUBREDDITS: Array<AvailabelSubreddits> = ['new', 'top', 'hot', 'controversial']

export const SUBREDDIT_URLS: Record<AvailabelSubreddits, string> = {
  new: 'https://api.reddit.com/r/pics/new.json',
  top: 'https://api.reddit.com/r/pics/top.json',
  hot: 'https://api.reddit.com/r/pics/hot.json',
  controversial: 'https://api.reddit.com/r/pics/controversial.json'
}
