import type { FC, ReactNode } from 'react'
import { FooterStyled, FooterContainer } from './Footer.styled'

interface Props {
  children: ReactNode
}

export const Footer: FC<Props> = ({ children }) =>
  <FooterStyled>
    <FooterContainer>
      {children}
    </FooterContainer>
  </FooterStyled>
