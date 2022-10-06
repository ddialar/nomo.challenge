import type { FC, ReactNode } from 'react'
import { NomoLogo } from '@components'
import { PageLayoutStyled, LogoContainer } from './PageLayout.styled'
import { Header, Main, Footer } from './components'

interface Props {
  children: ReactNode
}

export const PageLayout: FC<Props> = ({ children }) => {
  return (
    <PageLayoutStyled>
      <Header>
        <LogoContainer><NomoLogo /></LogoContainer><span>Senior FrontEnd Position Challenge</span>
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
