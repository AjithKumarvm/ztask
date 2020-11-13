import Loader from '../Loader'
import styles from './PageLoader.module.scss'

const PageLoader = () => (
  <div className={styles.container}>
    <Loader />
    Loading module
  </div>
)

export default PageLoader
