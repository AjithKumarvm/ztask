import { useDashboard } from '../../../Stores/DashboardStore'
import CustomerCard from './CustomerCard'

const Customers = () => {
  const [state] = useDashboard()
  const { customers } = state
  return <div>{customers.map(CustomerCard)}</div>
}

export default Customers
