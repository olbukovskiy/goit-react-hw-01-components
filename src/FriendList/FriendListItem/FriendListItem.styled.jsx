import styled from '@emotion/styled';

export const FriendsListItem = styled.li`
  display: flex;
  gap: ${props => props.theme.space[2]}px;
  align-items: center;
  justify-content: flex-start;
  width: 200px;
  height: 80px;
  padding: ${props => props.theme.space[3]}px ${props => props.theme.space[4]}px;
  background-color: ${props => props.theme.colors.background};
  cursor: pointer;

  :hover {
    box-shadow: 0px 1px 1px rgb(0 0 0 / 12%), 0px 4px 4px rgb(0 0 0 / 6%),
      1px 4px 6px rgb(0 0 0 / 16%);
  }
`;

export const Status = styled.span`
  display: block;
  width: 16px;
  height: 16px;
  border-radius: ${props => props.theme.radii.round};
  background-color: ${props =>
    !props.isOnline ? props.theme.colors.red : props.theme.colors.green};
`;

export const FriendAvatar = styled.img`
  display: block;
  object-position: center;
`;

export const Name = styled.p`
  font-size: ${props => props.theme.fontSizes[3]}px;
  font-weight: ${props => props.theme.fontWeights.bold};
  line-height: ${props => props.theme.lineHeights.body};
  color: ${props => props.theme.colors.text};
`;
