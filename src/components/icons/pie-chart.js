import React from 'react';

const PieChart = (props) => {
  return (
    <svg width={35} height={35} viewBox="0 0 35 35" fill="none" {...props}>
      <rect width={35} height={35} rx={5} fill="#7A41F8" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.955 8v9.036H28A9.043 9.043 0 0018.955 8zm-1.91 20a9.046 9.046 0 009.046-9.045h-9.046l-.009-9.037A9.04 9.04 0 1017.046 28z"
        fill="#fff"
      />
    </svg>
  );
};

export default PieChart;
