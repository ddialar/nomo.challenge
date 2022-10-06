import controversialSubreddit from '../assets/controversial.json'
import hotSubreddit from '../assets/hot.json'
import newSubreddit from '../assets/new.json'
import topSubreddit from '../assets/top.json'

export const getControversialSubredditFixture = () => [...controversialSubreddit.data.children.map(({ data }) => data)] as Array<Publication>
export const getRawControversialSubredditFixture = () => ({ ...controversialSubreddit })

export const getHotSubredditFixture = () => [...hotSubreddit.data.children.map(({ data }) => data)] as Array<Publication>
export const getRawHotSubredditFixture = () => ({ ...hotSubreddit })

export const getNewSubredditFixture = () => [...newSubreddit.data.children.map(({ data }) => data)] as Array<Publication>
export const getRawNewSubredditFixture = () => ({ ...newSubreddit })

export const getTopSubredditFixture = () => [...topSubreddit.data.children.map(({ data }) => data)] as Array<Publication>
export const getRawTopSubredditFixture = () => ({ ...topSubreddit })
