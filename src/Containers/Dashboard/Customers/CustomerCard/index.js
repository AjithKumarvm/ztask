import Card from '../../../../Components/Card'
import { FcContacts } from 'react-icons/fc'
import styles from './CustomerCard.module.scss'
import { FaWhatsappSquare } from 'react-icons/fa'
import { agoTime } from '../../../../Lib/Dates'
import classnames from 'classnames'
import { Link } from 'react-router-dom'
import { RiErrorWarningFill } from 'react-icons/ri'

const CustomerCard = ({
  id,
  name,
  channelId,
  contactable,
  lastIncomingMessageAt,
  channel
}) => (
  <Card key={id}>
    <div className={styles.name}>
      <FcContacts size={20} />
      &nbsp;&nbsp;
      <span>{name}</span>
    </div>
    <div className={styles.ago}>{agoTime(lastIncomingMessageAt)}</div>
    <Link
      to={`/message/${channelId}`}
      className={classnames(styles.contact, {
        [styles.contactable]: contactable && channel === 'whatsapp'
      })}
    >
      {channel === 'whatsapp' ? (
        <FaWhatsappSquare size={25} />
      ) : (
        <RiErrorWarningFill size={25} />
      )}
    </Link>
  </Card>
)

export default CustomerCard
