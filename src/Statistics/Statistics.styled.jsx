import styled from '@emotion/styled';

export const StatListHeader = styled.h2`
  text-align: center;
  font-size: ${props => props.theme.fontSizes[5]}px;
  font-weight: ${props => props.theme.fontWeights.heading}px;
  padding: ${props => props.theme.space[4]}px ${props => props.theme.space[3]}px;
`;

export const StatList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StatListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: ${props => props.theme.space[2]}px;
  width: 100px;
  padding: ${props => props.theme.space[3]}px ${props => props.theme.space[4]}px;
  background-color: ${props => props.backgroundColor};
`;

export const DocType = styled.span`
  color: ${props => props.theme.colors.great};
  font-size: ${props => props.theme.fontSizes[2]}px;
`;

export const Percentage = styled.span`
  color: ${props => props.theme.colors.great};
  font-size: ${props => props.theme.fontSizes[4]}px;
`;
