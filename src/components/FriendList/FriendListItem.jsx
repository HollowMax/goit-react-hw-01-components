import PropTypes from 'prop-types';
import { FriendItem } from './FriendListItem.styled';

export function FriendListItem({ avatar, name }) {
  return (
    <FriendItem className="item">
      <span className="status"></span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </FriendItem>
  );
}
