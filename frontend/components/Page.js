/* eslint-disable react/prop-types */
import React from 'react';

function Page({ children }) {
  return (
    <div>
      <h2>I am the page component</h2>
      {children}
    </div>
  );
}

export default Page;
