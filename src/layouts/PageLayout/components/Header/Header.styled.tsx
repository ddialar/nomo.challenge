import styled from 'styled-components'
import { ContainerLayoutStyles } from '@layouts'

export const HeaderStyled = styled.header`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 48px;
  min-height: 48px;
  background-color: white;
`

export const HeaderContainer = styled.div`
  ${ContainerLayoutStyles}
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 48px;
  min-height: 48px;
  padding: 0 1rem;
`
