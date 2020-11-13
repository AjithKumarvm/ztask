import { createStore, createHook, defaults } from 'react-sweet-state'
import { baseUrl } from '../Lib/constants'
import { getRequest } from '../Lib/apiCalls'

defaults.devtools = true
const Store = createStore({
  name: 'Zoko-Dashboard',
  initialState: {
    page: 1,
    customers: []
  },
  actions: {
    updateCustomers: () => async ({ setState, getState }) => {
      const { customers, page } = getState()
      const resp = await getRequest({
        url: `${baseUrl}/customer?channel=whatsapp&pageSize=5&page=${page}`
      })
      const { customers: moreCustomers, currentPage, totalPages } = resp
      if (!moreCustomers?.length || currentPage === totalPages) {
        return
      }
      setState({
        customers: [...customers, ...moreCustomers],
        page: currentPage + 1
      })
    }
  }
})

export const useDashboard = createHook(Store)
