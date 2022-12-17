import { FriendItem } from './FriendListItem.styled';
import PropTypes from 'prop-types';

export function FriendListItem({ avatar, name }) {
  return (
    <FriendItem className="item">
      <span className="status"></span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </FriendItem>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
