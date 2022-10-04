import type { FC, ReactNode } from 'react'
import { LayoutWrapper, LayoutContainer } from './components'

interface Props {
  children: ReactNode
}

export const MainLayout: FC<Props> = ({ children }) =>
  <LayoutWrapper>
    <LayoutContainer>
      {children}
    </LayoutContainer>
  </LayoutWrapper>
