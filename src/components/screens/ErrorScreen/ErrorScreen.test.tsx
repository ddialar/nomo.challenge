import { render } from '@testing-library/react'
import { ErrorScreen } from './ErrorScreen.component'
import '@testing-library/jest-dom'

const setup = () => render(<ErrorScreen />)

describe('ErrorScreen screen', () => {
  it('renders successfully', () => {
    const { getByLabelText } = setup()
    const error = getByLabelText('error screen')
    expect(error).toBeInTheDocument()
    expect(error).toHaveTextContent('There was an error loading data')
  })
})
