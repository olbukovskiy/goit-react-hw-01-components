import React from 'react';
import Box from 'Box';
import PropTypes from 'prop-types';

import {
  StatListItem,
  DocType,
  StatList,
  Percentage,
  StatListHeader,
} from './Statistics.styled';

const getRandomHexColor = function () {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

export function Statistics({ stats, title = '' }) {
  return (
    <Box as="section">
      {title && <StatListHeader>{title}</StatListHeader>}
      <StatList as="ul">
        {stats.map(({ id, label, percentage }) => {
          return (
            <StatListItem backgroundColor={getRandomHexColor()} key={id}>
              <DocType>{label}</DocType>
              <Percentage>{percentage}%</Percentage>
            </StatListItem>
          );
        })}
      </StatList>
    </Box>
  );
}

PropTypes.Statistics = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
