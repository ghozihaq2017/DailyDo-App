import React from 'react';

function Loader() {
  return (
    <div className="container-loading z-50 relative ">
      <div className="flex h-screen  items-center justify-center">
        <span className="loading loading-bars loading-lg text-tertiary"> </span>
      </div>
    </div>
  );
}

export default Loader;
