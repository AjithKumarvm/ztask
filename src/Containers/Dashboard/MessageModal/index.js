import { useEffect } from 'react'
import Modal from '../../../Components/Modal'
import { useDashboard } from '../../../Stores/DashboardStore'
import styles from './MessageModal.module.scss'
import Loader from '../../../Components/Loader'
import { FaWhatsappSquare } from 'react-icons/fa'
import { MdDone } from 'react-icons/md'
import { IoMdSend } from 'react-icons/io'
import classnames from 'classnames'

const MessageModal = ({ match: { params: { channelId } = {} } = {} }) => {
  const [state, actions] = useDashboard()
  const { textMessageLoading, messageSent, textMessage, customers = [] } = state
  const currentCustomer = customers.find(
    ({ channelId: id }) => id === channelId
  )
  const { name = '' } = currentCustomer || {}
  useEffect(() => {
    actions.resetMessage()
  }, [])
  if (messageSent) {
    return (
      <Modal>
        <div className={styles.content}>
          <MdDone size={50} />
          <br />
          <br />
          Message sent successfully
        </div>
      </Modal>
    )
  }
  return (
    <Modal>
      <div className={styles.header}>
        <FaWhatsappSquare size={20} />
        &nbsp;&nbsp;Send a message {name ? `to ${name}` : ''}
      </div>
      <textarea
        tabIndex='1'
        className={styles.textarea}
        onChange={event => {
          actions.updateMessage(event.target.value)
        }}
      />
      {textMessageLoading ? (
        <Loader />
      ) : (
        <div
          className={classnames(styles.button, {
            [styles.disableButton]: !textMessage.length
          })}
          onClick={() => actions.sendMessage({ channelId })}
        >
          <IoMdSend />
          &nbsp;&nbsp;SEND
        </div>
      )}
    </Modal>
  )
}

export default MessageModal
