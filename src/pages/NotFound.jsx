import React from 'react';

export default function NotFound() {
  return (
    <div className="error-page">
      <h1>404</h1>
      <p>Oops! The page you are looking for does not exist.</p>
      <p>
        <a href="/">Go back to Home</a>
      </p>
    </div>
  );
}
