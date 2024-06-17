import React from 'react';
import './TransactionsTable.css';
import { Link } from 'react-router-dom';

const TransactionsTable = ({ transactions }) => {
  if (!transactions || transactions.length === 0) {
    return <div>No transactions found.</div>;
  }

  return (
    <div>
      <div className="navigation-buttons">
        <button>
          <Link to="/statistics">View Statistics</Link>
        </button>
      </div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Category</th>
            <th>Price</th>
            <th>Sold</th>
            <th>Date of Sale</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.id}</td>
              <td>{transaction.title}</td>
              <td>{transaction.category}</td>
              <td>{transaction.price}</td>
              <td>{transaction.sold ? 'Yes' : 'No'}</td>
              <td>{transaction.dateOfSale}</td>
              <td>{transaction.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionsTable;

