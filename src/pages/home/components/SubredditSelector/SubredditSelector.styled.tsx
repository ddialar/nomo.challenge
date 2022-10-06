import styled from 'styled-components'
import { ContainerLayoutStyles } from '@layouts'

export const SubredditSelectorContainer = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 1rem 0;
  box-sizing: border-box;
`

export const SubredditSelectorList = styled.ul`
  ${ContainerLayoutStyles}
  justify-content: space-between;
  width: 675px;
  margin: 0;
  padding: 0;
`

export const SubredditSelectorListItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  width: 23%;
  line-height: 3rem;

  input {
    display: none;
  }

  label {
    display: block;
    width: 100%;
    /* line-height: 2.5rem; */
    background-color: white;
    border: 1px solid #b0b0b0;
    border-radius: 9999px;
    text-align: center;
    font-weight: 500;
    box-sizing: border-box;

    &:hover {
      border: 1px solid #0079d3;
      color: #0079d3;
    }
  }

  input:checked + label {
    background-color: #0079d3;
    border: 1px solid #0079d3;
    color: white;
    font-weight: 700;
  }

  @media screen and (max-width: 1024px) {
    width: 24%;
    line-height: 2rem;
    font-size: smaller;

    label {
      font-weight: 300;
    }
  }
`
