import type { FC, ReactNode } from 'react'
import { MainStyled } from './Main.styled'

interface Props {
  children: ReactNode
}

export const Main: FC<Props> = ({ children }) =>
  <MainStyled>
    {children}
  </MainStyled>
