import type { FC } from 'react'
import { ListSectionStyled } from './ListSection.styled'
import { ListComponent } from './components'

interface Props {
  publications: Array<Publication>
}

export const ListSection: FC<Props> = ({ publications }) =>
  <ListSectionStyled>
    <ListComponent publications={publications} />
  </ListSectionStyled>
