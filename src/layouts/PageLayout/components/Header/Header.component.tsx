import type { FC, ReactNode } from 'react'
import { MainLayout } from '@layouts'
import { HeaderStyled } from './Header.styled'

interface Props {
  children: ReactNode
}

export const Header: FC<Props> = ({ children }) =>
  <HeaderStyled>
    <MainLayout>
      {children}
    </MainLayout>
  </HeaderStyled>
