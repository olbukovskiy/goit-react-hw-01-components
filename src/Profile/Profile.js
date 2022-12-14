import React from 'react';
import Box from 'Box';
import PropTypes from 'prop-types';
import {
  Username,
  Tag,
  Location,
  UserAvatar,
  StatItem,
  StatHeading,
  ListItem,
  ProfileList,
} from './Profile.styled';

export function Profile({ username, tag, location, avatar, stats }) {
  return (
    <Box
      width="300px"
      maxHeight="100%"
      border="normal"
      borderColor="great"
      ml="auto"
      mr="auto"
    >
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        pt={4}
        pb={4}
        pr={5}
        pl={5}
        fontSize={2}
        lineHeight="body"
        color="bckg"
      >
        <UserAvatar src={avatar} alt="User avatar" />
        <Username>{username}</Username>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </Box>

      <ProfileList>
        <ListItem>
          <StatHeading>Followers</StatHeading>
          <StatItem>{stats.followers}</StatItem>
        </ListItem>
        <ListItem>
          <StatHeading>Views</StatHeading>
          <StatItem>{stats.views}</StatItem>
        </ListItem>
        <ListItem>
          <StatHeading>Likes</StatHeading>
          <StatItem>{stats.likes}</StatItem>
        </ListItem>
      </ProfileList>
    </Box>
  );
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number).isRequired,
};
