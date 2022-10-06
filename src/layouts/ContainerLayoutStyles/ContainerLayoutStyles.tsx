import { css } from 'styled-components'

export const ContainerLayoutStyles = css`
  display: flex;
  max-width: 1280px;

  @media screen and (max-width: 1024px) {
    padding: 0 1rem;
    width: 100%;
  }
`
