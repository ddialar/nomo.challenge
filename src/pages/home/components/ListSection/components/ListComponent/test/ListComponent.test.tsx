import type { ComponentProps } from 'react'
import { render } from '@testing-library/react'
import { ListComponent } from '../ListComponent.component'
import { getTopSubredditFixture } from '@fixtures'
import '@testing-library/jest-dom'

const setup = (properties: ComponentProps<typeof ListComponent>) =>
  render(<ListComponent {...properties} />)

describe('ListComponent component', () => {
  const mockedPublications = getTopSubredditFixture()

  it('renders successfully', () => {
    const { queryAllByLabelText } = setup({ publications: mockedPublications })

    const publications = queryAllByLabelText('post')
    expect(publications).toHaveLength(mockedPublications.length)
  })
})
