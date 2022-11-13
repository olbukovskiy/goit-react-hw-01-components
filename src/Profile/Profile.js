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
} from './Profile.styled';

export function Profile({
  user: {
    username,
    tag,
    location,
    avatar,
    stats: { followers, views, likes },
  },
}) {
  return (
    <Box width="300px" height="100%" border="normal" borderColor="great">
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

      <Box
        as="ul"
        display="grid"
        justifyContent="center"
        gridTemplateColumns="1fr 1fr 1fr"
        gridTemplateRows="repeat(1, 100px)"
        width="100%"
        height="20%"
        fontSize={2}
        lineHeight="body"
        color="bckg"
        bg="bg"
      >
        <ListItem>
          <StatHeading>Followers</StatHeading>
          <StatItem>{followers}</StatItem>
        </ListItem>
        <ListItem>
          <StatHeading>Views</StatHeading>
          <StatItem>{views}</StatItem>
        </ListItem>
        <ListItem>
          <StatHeading>Likes</StatHeading>
          <StatItem>{likes}</StatItem>
        </ListItem>
      </Box>
    </Box>
  );
}

Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  followers: PropTypes.number,
  views: PropTypes.number,
  likes: PropTypes.number,
};
