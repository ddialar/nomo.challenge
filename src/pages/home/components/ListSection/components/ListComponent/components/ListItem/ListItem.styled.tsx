import styled from 'styled-components'

export const ListItemStyled = styled.li`
  width: 640px;
  margin-bottom: 1rem;
  padding: 1rem;
  list-style: none;
  background-color: white;
  border: 1px solid #b0b0b0;
  border-radius: 5px;
`

export const Link = styled.a`
  display: flex;
  color: #222222;
  text-decoration: none;
`

export const ThumbnailContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  min-width: 150px;
  height: auto;
  margin-right: 10px;

  & img {
    width: 100%;
  }
`

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`

export const Date = styled.p`
  width: 100%;
  margin: 0;
  color: #878a8c;
  font-size: small;
  text-align: right;
`

export const Title = styled.p`
  flex-grow: 1;
  width: 100%;
  font-size: large;
  font-weight: 800;
`

export const MetadataContainer = styled.div`
  display: flex;
  font-size: smaller;
  color: #878a8c;
/* 
  & span {
  } */
`

export const Author = styled.div`
  width: 50%;
  text-align: left;
`

export const Score = styled.div`
  width: 25%;
  text-align: right;
`

export const Comments = styled.div`
  width: 25%;
  text-align: right;
`
