import { renderHook } from '@testing-library/react'
import { usePublicationDate } from '../../ListItem.hooks'

describe('Hooks - usePublicationDate', () => {
  it('returns the period since the publication release, in days', async () => {
    const TWO_DAYS_SECONDS = 60 * 60 * 24 * 2 * 1000 // seconds, minutes, days and amount of days
    const rawPublicationDate = (new Date()).getTime() - TWO_DAYS_SECONDS
    const { result } = renderHook(() => usePublicationDate(rawPublicationDate))
    const expectedResult = '2 days ago'
    expect(result.current.publicationDate).toBe(expectedResult)
  })
})
