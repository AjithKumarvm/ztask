import { useDashboard } from '../../../Stores/DashboardStore'
import CustomerCard from './CustomerCard'
import styles from './Customers.module.scss'

const Customers = () => {
  const [state] = useDashboard()
  const { customers } = state
  return <div className={styles.container}>{customers.map(CustomerCard)}</div>
}

export default Customers
