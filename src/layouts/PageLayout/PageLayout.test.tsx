import type { ComponentProps } from 'react'
import { render, within } from '@testing-library/react'
import { PageLayout } from './PageLayout.page'
import '@testing-library/jest-dom'

const setup = (properties: ComponentProps<typeof PageLayout>) =>
  render(<PageLayout {...properties} />)

describe('PageLayout component', () => {
  it('renders successfully', () => {
    // const { queryAllByLabelText } = setup({ children: <div>Testing children</div> })
    const { getByRole } = setup({ children: <div>Testing children</div> })

    const header = getByRole('banner')
    expect(header).toBeInTheDocument()
    const logo = within(header).getByLabelText('nomo logo')
    expect(logo).toBeInTheDocument()
    const headerText = within(header).getByText('Senior FrontEnd Position Challenge')
    expect(headerText).toBeInTheDocument()

    const main = getByRole('main')
    expect(main).toBeInTheDocument()
    const mainContent = within(main).getByText('Testing children')
    expect(mainContent).toBeInTheDocument()

    const footer = getByRole('contentinfo')
    expect(footer).toBeInTheDocument()
    const footerContent = within(footer).getByText('Challenge done by')
    expect(footerContent).toBeInTheDocument()
    const footerLink = within(footer).getByRole('link')
    expect(footerLink).toBeInTheDocument()
    expect(footerLink).toHaveTextContent('Dailos Rafael Díaz Lara')
    expect(footerLink.getAttribute('href')).toBe('https://linkedin.com/in/ddialar')
  })
})
