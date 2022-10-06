import styled from 'styled-components'
import { ContainerLayoutStyles } from 'src/layouts/ContainerLayoutStyles'

export const FooterStyled = styled.footer`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 64px;
  min-height: 64px;
  background-color: #252525;
`

export const FooterContainer = styled.div`
  ${ContainerLayoutStyles}
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 64px;
  min-height: 64px;
  color: #12c6d7;
`
