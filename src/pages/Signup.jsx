import React, { useState } from 'react';

export default function SignUp() {
  const [formData, setFormData] = useState({
    fullname: '',
    username: '',
    email: '',
    phone: '',
    password: '',
  });

  const [errors, setErrors] = useState({});

  const phonePattern = /^\+63\d{10}$/;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};
    if (!phonePattern.test(formData.phone)) {
      newErrors.phone = 'Phone number must be in format +63 followed by 10 digits';
    }
    // Add other validations if needed
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    // Submit form data to your API or backend
    console.log('Signing up with:', formData);
  };

  return (
    <div className="auth-container fade-in">
      <h2 className="text-center text-primary font-bold mb-4">Create Your Account</h2>
      <p className="text-center text-muted mb-8">Join RentEase and start renting your ride today</p>

      <form onSubmit={handleSubmit} className="space-y-4" noValidate>
        <div>
          <label htmlFor="fullname" className="block mb-2 font-medium">Full Name</label>
          <input
            type="text"
            id="fullname"
            name="fullname"
            className="form-input"
            placeholder="Enter your full name"
            required
            value={formData.fullname}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="username" className="block mb-2 font-medium">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            className="form-input"
            placeholder="Choose a username"
            required
            value={formData.username}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="email" className="block mb-2 font-medium">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-input"
            placeholder="Enter your email"
            required
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="phone" className="block mb-2 font-medium">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="form-input"
            placeholder="+63 912 345 6789"
            pattern="^\+63\d{10}$"
            required
            value={formData.phone}
            onChange={handleChange}
          />
          <small className="text-muted">Format: +63 followed by 10 digits</small>
          {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
        </div>

        <div>
          <label htmlFor="password" className="block mb-2 font-medium">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            className="form-input"
            placeholder="Enter a strong password"
            required
            value={formData.password}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="btn-primary w-full mt-4">Sign Up</button>
      </form>

      <p className="text-center mt-6 text-muted">
        Already have an account?{' '}
        <a href="/login" className="text-primary font-semibold">Login</a>
      </p>
    </div>
  );
}
