import { apiKey } from './constants'
export const getOptions = ({ url, method, ...otherOptions }) => {
  const myHeaders = new window.Headers()
  myHeaders.append('Content-Type', 'application/json')
  myHeaders.append('apikey', apiKey)
  return new window.Request(url, {
    method: 'GET',
    headers: myHeaders,
    ...otherOptions
  })
}
export const getRequest = ({ url }) =>
  window.fetch(getOptions({ url, method: 'GET' })).then(resp => resp.json())
