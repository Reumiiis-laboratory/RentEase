import React, { useState } from 'react';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here, e.g., call API to send reset instructions
    console.log('Reset password for:', email);
    // Optionally show a success message or redirect
  };

  return (
    <div className="auth-container fade-in">
      <h2 className="text-center text-primary font-bold mb-4">Forgot Password</h2>
      <p className="text-center text-muted mb-8">
        Enter your email address and we’ll send you instructions to reset your password.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4" noValidate>
        <div>
          <label htmlFor="email" className="block mb-2 font-medium">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-input"
            placeholder="Enter your email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <button type="submit" className="btn-primary w-full mt-4">
          Reset Password
        </button>
      </form>

      <p className="text-center mt-6 text-muted">
        Remembered your password?{' '}
        <a href="/login" className="text-primary font-semibold">Login</a>
      </p>
    </div>
  );
}
