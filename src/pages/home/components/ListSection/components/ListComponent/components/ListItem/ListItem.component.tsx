import type { FC } from 'react'
import {
  ListItemStyled,
  Link,
  ThumbnailContainer,
  ContentContainer,
  Date,
  Title,
  MetadataContainer,
  Author,
  Score,
  Comments
} from './ListItem.styled'
import { usePublicationDate } from './ListItem.hooks'
import { RedditIcon } from '@components'

interface Props {
  publication: Publication
}

export const ListItem: FC<Props> = ({ publication }) => {
  const { publicationDate } = usePublicationDate(publication.created)

  return (
    <ListItemStyled>
      <Link href={`https://www.reddit.com/${publication.permalink}`} target='_blank'>
        <ThumbnailContainer>
          {
            publication.thumbnail.match(/^https:\/\/(a|b).thumbs.redditmedia.com/)
              ? <img src={publication.thumbnail} alt='thumbnail' />
              : <RedditIcon />
          }
        </ThumbnailContainer>
        <ContentContainer>
          <Date>{publicationDate}</Date>
          <Title>{publication.title}</Title>
          <MetadataContainer>
            <Author>Published by <b>{publication.author}</b></Author>
            <Score>Score: <b>{publication.score}</b></Score>
            <Comments>Comments: <b>{publication.num_comments}</b></Comments>
          </MetadataContainer>
        </ContentContainer>
      </Link>
    </ListItemStyled>
  )
}
