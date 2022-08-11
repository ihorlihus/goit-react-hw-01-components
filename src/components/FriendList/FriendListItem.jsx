import PropTypes from 'prop-types';
import { FriendListItemWrap, FriendStatus } from './FriendList.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <FriendListItemWrap>
      <FriendStatus isOnline={isOnline}></FriendStatus>
      <img src={avatar} alt="User avatar" width="48" />
      <p>{name}</p>
    </FriendListItemWrap>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
