import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem';
import styles from './FriendList.module.css';

export const FriendList = ({ friends }) => {
  return (
    <ul className={styles.friendlist}>
      {friends.map(friend => (
        <FriendListItem
          key={friend.id}
          name={friend.name}
          isOnline={friend.isOnline}
          avatar={friend.avatar}
        />
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    }).isRequired
  ),
};
