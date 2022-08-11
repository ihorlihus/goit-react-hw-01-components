import PropTypes from 'prop-types';
import {
  ProfileContainer,
  ProfileInfo,
  ProfileInfoFoto,
} from './Profile.styled';
export const Profile = ({
  username,
  tag,
  location,
  avatar,
  followers,
  views,
  likes,
}) => {
  return (
    <ProfileContainer>
      <ProfileInfo>
        <ProfileInfoFoto src={avatar} alt={username} width="72" />
        <p>{username}</p>
        <p>@{tag}</p>
        <p>{location}</p>
      </ProfileInfo>

      <ul>
        <li>
          <span>Followers</span>
          <span>{followers}</span>
        </li>
        <li>
          <span>Views</span>
          <span>{views}</span>
        </li>
        <li>
          <span>Likes</span>
          <span>{likes}</span>
        </li>
      </ul>
    </ProfileContainer>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};
