import styles from './Modal.module.scss'
import { AiFillCloseCircle } from 'react-icons/ai'

const Modal = ({ children }) => (
  <div className={styles.container}>
    <div className={styles.content}>
      <AiFillCloseCircle
        className={styles.close}
        size={20}
        onClick={() => window.history.back()}
      />
      {children}
    </div>
  </div>
)

export default Modal
