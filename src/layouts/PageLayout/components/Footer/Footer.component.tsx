import type { FC, ReactNode } from 'react'
import { MainLayout } from '@layouts'
import { FooterStyled } from './Footer.styled'

interface Props {
  children: ReactNode
}

export const Footer: FC<Props> = ({ children }) =>
  <FooterStyled>
    <MainLayout>
      {children}
    </MainLayout>
  </FooterStyled>
