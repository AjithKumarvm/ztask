import { RiLoader5Fill } from 'react-icons/ri'
import styles from './Loader.module.scss'

const Loader = () => (
  <div className={styles.container}>
    <RiLoader5Fill className={styles.loader} size={30} />
  </div>
)

export default Loader
