import styled from 'styled-components'
import { ContainerLayoutStyles } from '@layouts'

export const ListComponentStyled = styled.ul`
  ${ContainerLayoutStyles}
  flex-direction: column;
  height: 100%;
  margin: 0;
  padding: 0;

  @media screen and (max-width: 1024px) {
    width: 100%;
    padding: 0 1rem;
    box-sizing: border-box;
  }
`
