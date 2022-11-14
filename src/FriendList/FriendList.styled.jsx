import styled from '@emotion/styled';

export const FriendsList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  row-gap: ${props => props.theme.space[3]}px;
`;
