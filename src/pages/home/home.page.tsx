import type { FC } from 'react'
import { PageLayout } from '@layouts'
import { ListSection } from './components'
import { getTopSubredditFixture } from '@fixtures'

export const HomePage: FC = () => {
  return (
    <PageLayout>
      <ListSection publications={getTopSubredditFixture()} />
    </PageLayout>
  )
}
