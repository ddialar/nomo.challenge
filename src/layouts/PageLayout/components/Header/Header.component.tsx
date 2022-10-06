import type { FC, ReactNode } from 'react'
import { HeaderStyled, HeaderContainer } from './Header.styled'

interface Props {
  children: ReactNode
}

export const Header: FC<Props> = ({ children }) =>
  <HeaderStyled>
    <HeaderContainer>
      {children}
    </HeaderContainer>
  </HeaderStyled>
