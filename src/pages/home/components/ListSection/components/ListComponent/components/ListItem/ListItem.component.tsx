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
  const { publicationDate } = usePublicationDate(publication.created * 1000) // The publication date is provided in seconds

  return (
    <ListItemStyled aria-label='post'>
      <Link
        href={`https://www.reddit.com/${publication.permalink}`}
        target='_blank'
        aria-label={`open ${publication.title} post`}
      >
        <ThumbnailContainer>
          {
            publication.thumbnail.match(/^https:\/\/(a|b).thumbs.redditmedia.com/)
              ? <img src={publication.thumbnail} alt='thumbnail' />
              : <RedditIcon aria-label='thumbnail' />
          }
        </ThumbnailContainer>
        <ContentContainer>
          <Date aria-label='publication date'>Published <b>{publicationDate}</b></Date>
          <Title aria-label='post title'>{publication.title}</Title>
          <MetadataContainer>
            <Author aria-label='post author'>Published by <b>{publication.author}</b></Author>
            <Score aria-label='post score'>Score: <b>{publication.score}</b></Score>
            <Comments aria-label='post comments amount'>Comments: <b>{publication.num_comments}</b></Comments>
          </MetadataContainer>
        </ContentContainer>
      </Link>
    </ListItemStyled>
  )
}
