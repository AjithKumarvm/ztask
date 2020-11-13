import dayjs from 'dayjs'
import advancedFormat from 'dayjs/plugin/advancedFormat'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import relativeTime from 'dayjs/plugin/relativeTime'

export const agoTime = (date, format = '') => {
  dayjs.extend(advancedFormat)
  dayjs.extend(customParseFormat)
  dayjs.extend(relativeTime)
  const dateObj = dayjs(date).format(format)
  if (dayjs(dateObj).isValid()) return dayjs(dateObj).fromNow()
  return ''
}
