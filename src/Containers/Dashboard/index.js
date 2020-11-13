import Customers from './Customers'
import styles from './Dashboard.module.scss'
import LazyLoader from './LazyLoader'
import MessageModal from './MessageModal'
import { Route } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div className={styles.container}>
      <h1>Your Customers</h1>
      <Customers />
      <LazyLoader />
      <Route path='*/message/:channelId' component={MessageModal} />
    </div>
  )
}

export default Dashboard
