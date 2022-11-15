import React from 'react';
import { FriendsList } from './FriendList.styled';
import { FriendListItem } from 'FriendList/FriendListItem/FriendListItem';
import PropTypes from 'prop-types';

export function FriendList({ friends }) {
  return (
    <FriendsList>
      {friends.map(friend => {
        return (
          <FriendListItem
            key={friend.id}
            name={friend.name}
            avatarUrl={friend.avatar}
            isOnline={friend.isOnline}
          />
        );
      })}
    </FriendsList>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number,
      name: PropTypes.string,
      avatar: PropTypes.string,
      isOnline: PropTypes.bool,
    })
  ),
};
