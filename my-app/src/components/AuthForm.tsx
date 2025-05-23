// src/components/AuthForm.tsx

import { useState } from 'react';

interface AuthFormProps {
  type: 'login' | 'signup';
}

const AuthForm: React.FC<AuthFormProps> = ({ type }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle submit
    console.log(formData);
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      {type === 'signup' && (
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          className="w-full px-4 py-2 rounded-lg bg-white/60 placeholder-gray-700 text-gray-900"
          value={formData.name}
          onChange={handleChange}
          required
        />
      )}
      <input
        type="email"
        name="email"
        placeholder="Email"
        className="w-full px-4 py-2 rounded-lg bg-white/60 placeholder-gray-700 text-gray-900"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        className="w-full px-4 py-2 rounded-lg bg-white/60 placeholder-gray-700 text-gray-900"
        value={formData.password}
        onChange={handleChange}
        required
      />
      <button
        type="submit"
        className="w-full py-2 bg-indigo-600 hover:bg-indigo-700 transition-colors text-white rounded-lg font-semibold"
      >
        {type === 'login' ? 'Log In' : 'Sign Up'}
      </button>
    </form>
  );
};

export default AuthForm;
