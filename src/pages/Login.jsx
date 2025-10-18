import React, { useState } from 'react';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here, e.g., API call
    console.log('Logging in with:', { username, password });
  };

  return (
    <div className="auth-container fade-in">
      <h2 className="text-center text-primary font-bold mb-4">Welcome Back</h2>
      <p className="text-center text-muted mb-8">Login to continue renting your ride</p>

      <form onSubmit={handleSubmit} className="space-y-4" noValidate>
        <div>
          <label htmlFor="username" className="block mb-2 font-medium">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            className="form-input"
            placeholder="Enter your username"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="password" className="block mb-2 font-medium">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            className="form-input"
            placeholder="Enter your password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit" className="btn-primary w-full mt-4">Login</button>
      </form>

      <div className="text-center mt-4">
        <a href="/forgot-password" className="text-primary">Forgot Password?</a>
      </div>

      <p className="text-center mt-4 text-muted">
        Don’t have an account?{' '}
        <a href="/signup" className="text-primary font-semibold">Sign Up</a>
      </p>
    </div>
  );
}
