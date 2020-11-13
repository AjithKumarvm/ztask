import { createStore, createHook, defaults } from 'react-sweet-state'
import { baseUrl } from '../Lib/constants'
import { getRequest, postRequest } from '../Lib/apiCalls'

defaults.devtools = true
const Store = createStore({
  name: 'Zoko-Dashboard',
  initialState: {
    page: 1,
    customers: [],
    showLazyLoader: true,
    textMessage: '',
    messageSent: false
  },
  actions: {
    updateCustomers: () => async ({ setState, getState }) => {
      const { customers, page } = getState()
      setState({
        isLoading: true
      })
      try {
        const resp = await getRequest({
          url: `${baseUrl}/customer?channel=whatsapp&pageSize=10&page=${page}`
        })
        const { customers: moreCustomers, currentPage, totalPages } = resp
        setState({
          customers: [...customers, ...moreCustomers],
          page: currentPage + 1,
          isLoading: false
        })
        if (!moreCustomers?.length || currentPage === totalPages) {
          return setState({
            showLazyLoader: false,
            isLoading: false
          })
        }
      } catch (e) {
        window.alert('API failed. Please refresh')
      }
    },
    resetMessage: () => ({ setState }) => {
      setState({
        textMessage: '',
        messageSent: false,
        textMessageLoading: false
      })
    },
    updateMessage: message => ({ setState }) => {
      setState({
        textMessage: message
      })
    },
    sendMessage: ({ channelId }) => async ({ setState, getState }) => {
      setState({
        textMessageLoading: true
      })
      const { textMessage: message } = getState()
      const resp = await postRequest({
        url: `${baseUrl}/message`,
        body: {
          channel: 'whatsapp',
          recipient: channelId,
          type: 'text',
          message
        }
      })
      const { statusText } = resp
      if (statusText === 'Accepted') {
        setState({
          messageSent: true
        })
      } else {
        window.alert('Failed to send the message. Please retry.')
      }
      setState({
        textMessageLoading: false
      })
    }
  }
})

export const useDashboard = createHook(Store)
