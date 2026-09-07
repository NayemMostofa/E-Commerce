import React from 'react'

const Container = ({ className = "" , children }) => {
  return <div className={`container px-1.5 lg:0 mx-auto w-full max-w-292.5 ${className}`}>{children}</div>;
};

export default Container

