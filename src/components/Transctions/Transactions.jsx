import PropTypes from 'prop-types';
import { Tdata, Tbl, Thead } from './Transactions.styled';

const capitalize = function (el) {
  return `${el[0].toUpperCase()}${el.slice(1)}`;
};

export function TransactionHistory(transactions) {
  return (
    <Tbl className="transaction-history">
      <thead>
        <tr>
          <Thead>Type</Thead>
          <Thead>Amount</Thead>
          <Thead>Currency</Thead>
        </tr>
      </thead>

      <tbody>
        {transactions.items.map(el => (
          <tr key={el.id}>
            <Tdata>{capitalize(el.type)}</Tdata>
            <Tdata>{el.amount}</Tdata>
            <Tdata>{el.currency}</Tdata>
          </tr>
        ))}
      </tbody>
    </Tbl>
  );
}

TransactionHistory.propTypes = {
  transactions: PropTypes.shape(PropTypes.array.isRequired),
};
