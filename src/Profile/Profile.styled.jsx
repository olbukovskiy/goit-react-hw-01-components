import styled from '@emotion/styled';

export const Username = styled.p`
  margin-bottom: ${props => props.theme.space[1]}px;
  color: ${props => props.theme.colors.text};
  font-size: ${props => props.theme.fontSizes[4]}px;
  font-weight: ${props => props.theme.fontWeights.heading};
`;

export const Tag = styled.p`
  margin-bottom: ${props => props.theme.space[3]}px;
`;

export const Location = styled.p``;

export const UserAvatar = styled.img`
  display: block;
  width: 100px;
  height: 100px;
  border-radius: ${props => props.theme.radii.round};
  overflow: hidden;
  object-position: center;
  margin-bottom: ${props => props.theme.space[3]}px;
`;

export const ProfileList = styled.ul`
  display: grid;
  justify-content: center;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: repeat(1, 100px);
  width: 100%;
  height: 20%;
  font-size: ${props => props.theme.fontSizes[2]}px;
  line-height: ${props => props.theme.lineHeights.body};
  color: ${props => props.theme.colors.bckg};
  background-color: ${props => props.theme.colors.bg};
`;

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: ${props => props.theme.borders.normal};
  border-color: ${props => props.theme.colors.great};
`;

export const StatHeading = styled.span`
  margin-bottom: ${props => props.theme.space[2]}px;
  font-size: ${props => props.theme.fontSizes[1]}px;
`;

export const StatItem = styled.span`
  color: ${props => props.theme.colors.text};
`;
