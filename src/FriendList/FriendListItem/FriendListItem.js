import React from 'react';
import { PropTypes } from 'prop-types';

import {
  FriendsListItem,
  Status,
  Name,
  FriendAvatar,
} from './FriendListItem.styled';

export function FriendListItem({ name, avatarUrl, isOnline }) {
  return (
    <FriendsListItem>
      <Status isOnline={isOnline} />
      <FriendAvatar src={avatarUrl} alt="User avatar" width="48" />
      <Name>{name}</Name>
    </FriendsListItem>
  );
}

FriendListItem.propTypes = {
  name: PropTypes.string.isRequired,
  avatarUrl: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
