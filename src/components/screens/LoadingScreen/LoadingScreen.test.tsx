import { render } from '@testing-library/react'
import { LoadingScreen } from './LoadingScreen.component'
import '@testing-library/jest-dom'

const setup = () => render(<LoadingScreen />)

describe('LoadingScreen screen', () => {
  it('renders successfully', () => {
    const { getByLabelText } = setup()
    const loading = getByLabelText('loading screen')
    expect(loading).toBeInTheDocument()
    expect(loading).toHaveTextContent('Loading...')
  })
})
