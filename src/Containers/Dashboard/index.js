import { useEffect } from 'react'
import { useDashboard } from '../../Stores/DashboardStore'
import Customers from './Customers'

const Dashboard = () => {
  const [, actions] = useDashboard()
  useEffect(() => {
    actions.updateCustomers()
  }, [])
  return (
    <div>
      <Customers />
    </div>
  )
}

export default Dashboard
