import React from 'react';
import PropTypes from 'prop-types';
import {
  TransactionsTable,
  TableTitle,
  TableHead,
  TableRow,
  TableData,
} from './TransactionHistore.styled';

export function TransactionHistory({ items }) {
  return (
    <TransactionsTable>
      <TableTitle>Transaction History</TableTitle>
      <thead>
        <TableRow>
          <TableHead>Type</TableHead>
          <TableHead>Amount</TableHead>
          <TableHead>Currency</TableHead>
        </TableRow>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <TableRow key={id}>
              <TableData>{type}</TableData>
              <TableData>{amount}</TableData>
              <TableData>{currency}</TableData>
            </TableRow>
          );
        })}
      </tbody>
    </TransactionsTable>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
