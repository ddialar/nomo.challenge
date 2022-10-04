/**
 * It takes a raw publication date (in milliseconds) and returns a formatted publication date (in days)
 * @param {number} rawPublicationDate - The raw publication date from the API.
 * @returns An object with a publicationDate property.
 */
export const usePublicationDate = (rawPublicationDate: number) => {
  const ONE_DAY = (1000 * 60 * 60 * 24)
  const daysAgo = Math.round(((new Date(rawPublicationDate)).getTime() - (new Date()).getTime()) / ONE_DAY)
  const relativeTime = new Intl.RelativeTimeFormat('en', {
    localeMatcher: 'best fit',
    numeric: 'always',
    style: 'narrow'
  })

  return { publicationDate: relativeTime.format(daysAgo, 'day') }
}
