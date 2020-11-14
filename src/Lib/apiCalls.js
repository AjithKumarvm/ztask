import { apiKey } from './constants'
export const getOptions = ({ url, ...otherOptions }) => {
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
  window.fetch(getOptions({ url })).then(resp => resp.json())

export const postRequest = ({ url, body }) =>
  window
    .fetch(
      getOptions({ url, method: 'POST', body: window.JSON.stringify(body) })
    )
    .then(resp => resp.json())
