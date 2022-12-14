import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Box, Image, UserName, UserInfo, Stats, StatsItem } from './Profile.styled';

export function Profile({ username, tag, location, avatar, stats }) {
  return (
    <div className="profile">
      <Box bg="bg" className="description">
        <Image src={avatar} className="avatar"></Image>
        <UserName className="name">{username}</UserName>
        <UserInfo className="tag">{tag}</UserInfo>
        <UserInfo className="location">{location}</UserInfo>
      </Box>

      <Stats className="stats">
        <StatsItem>
          <span className="label">Followers</span>
          <span className="quantity">{stats.followers}</span>
        </StatsItem>
        <StatsItem>
          <span className="label">Views</span>
          <span className="quantity">{stats.views}</span>
        </StatsItem>
        <StatsItem>
          <span className="label">Likes</span>
          <span className="quantity">{stats.likes}</span>
        </StatsItem>
      </Stats>
    </div>
  );
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
