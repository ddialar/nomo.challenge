import type { FC, ReactNode } from 'react'
import { NomoLogo } from '@components'
import { PageLayoutStyled, LogoContainer, LinkToPersonalProfile } from './PageLayout.styled'
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
        <span>Challenge done by</span>
        <LinkToPersonalProfile
          href='https://linkedin.com/in/ddialar'
          target='_blank'
        >
          Dailos Rafael Díaz Lara
        </LinkToPersonalProfile>
      </Footer>
    </PageLayoutStyled>
  )
}
