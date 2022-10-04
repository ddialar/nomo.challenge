import type { FC } from 'react'
import { ListComponentStyled } from './ListComponent.styled'
import { ListItem } from './components'

interface Props {
  publications: Array<Publication>
}

export const ListComponent: FC<Props> = ({ publications }) =>
  <ListComponentStyled>
    {publications.map(item => <ListItem key={item.id} publication={item} />)}
  </ListComponentStyled>
