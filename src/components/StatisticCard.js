import React from 'react';

const StatisticCard = ({ icon, count }) => {
  return (
    <div
      className="d-flex align-items-center"
      style={{ paddingRight: '1em', flex: '1' }}
    >
      {icon}
      <span className="ml-1">{count}</span>
    </div>
  );
};

export default StatisticCard;
