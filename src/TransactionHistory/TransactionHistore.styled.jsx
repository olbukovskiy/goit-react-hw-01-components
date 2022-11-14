import styled from '@emotion/styled';

export const TransactionsTable = styled.table`
  background: ${props => props.theme.colors.background};
  border-radius: ${props => props.theme.radii.normal};
  border-collapse: collapse;
  height: 320px;
  margin: auto;
  max-width: 600px;
  padding: ${props => props.theme.space[1]}px;
  width: 100%;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
`;

export const TableTitle = styled.caption`
  color: ${props => props.theme.colors.text};
  font-size: ${props => props.theme.fontSizes[5]}px;
  font-weight: ${props => props.theme.fontWeights.heading};
  padding: ${props => props.theme.space[4]}px ${props => props.theme.space[5]}px;
  font-style: normal;
  font-family: 'Roboto', helvetica, arial, sans-serif;
  text-shadow: -1px -1px 1px rgba(0, 0, 0, 0.1);
  text-transform: uppercase;
`;

export const TableHead = styled.th`
  color: ${props => props.theme.colors.bg};
  background: ${props => props.theme.colors.tableBg};
  border-bottom: 4px solid #9ea7af;
  border-right: 1px solid #343a45;
  font-size: ${props => props.theme.fontSizes[4]}px;
  font-weight: ${props => props.theme.fontWeights.body};
  padding: ${props => props.theme.space[4]}px;
  text-align: center;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  vertical-align: middle;
`;

export const TableRow = styled.tr`
  border-top: 1px solid #c1c3d1;
  border-bottom: 1px solid #c1c3d1;
  color: ${props => props.theme.colors.bckg};
  font-size: ${props => props.theme.fontSizes[2]}px;
  font-weight: normal;
  text-shadow: 0 1px 1px rgba(256, 256, 256, 0.1);
`;

export const TableData = styled.td`
  background: ${props => props.theme.colors.background};
  padding: ${props => props.theme.space[4] - 4}px;
  text-align: center;
  vertical-align: middle;
  font-weight: 300;
  font-size: 18px;
  text-shadow: -1px -1px 1px rgba(0, 0, 0, 0.1);
  border-right: 1px solid #c1c3d1;
`;
