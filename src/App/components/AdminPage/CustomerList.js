import React from 'react';

const sortWithHighestDebtFirst = () => {
  return (a, b) => (a.debt > b.debt ? -1 : 1);
};

const CustomerList = ({ users, handleUserClick }) => {
  const sortedUsers = users.sort(sortWithHighestDebtFirst());

  return sortedUsers.map((sortedUser) => {
    return (
      <div
        key={sortedUser.username}
        className="customer-container"
        onClick={handleUserClick(sortedUser.username, sortedUser.debt)}
      >
        <div className="customer-name">{sortedUser.username}</div>
        <div className="customer-debt">
          <div className="customer-debt-value">
            <div className="customer-debt-price"> ₱{sortedUser.debt}</div>
            <div className="customer-debt-label">debt</div>
          </div>
        </div>
      </div>
    );
  });
};

export default CustomerList;
