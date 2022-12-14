import { FriendListItem } from './FriendListItem';
import PropTypes from 'prop-types';

export function FriendList({ friends }) {
  return (
    <ul className="friend-list">
      {friends.map(el => (
        <FriendListItem key={el.id} avatar={el.avatar} name={el.name} isOnline={el.isOnline} />
      ))}
    </ul>
  );
}

FriendList.propTypes = { friends: PropTypes.array.isRequired };
