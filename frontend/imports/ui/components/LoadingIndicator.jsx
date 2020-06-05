import React from 'react';

export const LoadingIndicator = () => {
  return (
    <div className="loading-indicator d-flex align-items-center justify-content-center">
      <div className="spinner-grow text-primary" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};
