import type { FC, ReactNode } from 'react'
import { PageLayoutStyled } from './PageLayout.styled'
import { Header, Main, Footer } from './components'

interface Props {
  children: ReactNode
}

export const PageLayout: FC<Props> = ({ children }) => {
  return (
    <PageLayoutStyled>
      <Header>
        Hello Header
      </Header>
      <Main>
        {children}
      </Main>
      <Footer>
        Footer
      </Footer>
    </PageLayoutStyled>
  )
}
