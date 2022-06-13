import React from 'react';

const Play = (props) => {
  return (
    <svg
      width={props.width ?? 17}
      height={props.height ?? 17}
      viewBox="0 0 17 17"
      fill="none"
      {...props}
    >
      <path
        d="M8.5 0C3.813 0 0 3.813 0 8.5 0 13.187 3.813 17 8.5 17c4.687 0 8.5-3.813 8.5-8.5C17 3.813 13.187 0 8.5 0zm4.41 8.734l-6.234 4.25a.284.284 0 01-.443-.234v-8.5a.283.283 0 01.443-.234l6.234 4.25a.284.284 0 010 .468z"
        fill={props.fill ?? '#5567FF'}
      />
    </svg>
  );
};

export default Play;
