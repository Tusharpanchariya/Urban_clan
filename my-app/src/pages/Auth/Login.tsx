// src/pages/Auth/Login.tsx

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import AuthForm from '../../components/AuthForm';

const Login = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center p-4">
      <motion.div
        className="bg-white/20 backdrop-blur-lg rounded-2xl shadow-xl p-8 w-full max-w-md"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold text-white text-center mb-6">Welcome Back</h2>
        <AuthForm type="login" />
        <p className="text-white text-center mt-4">
          Don’t have an account?{' '}
          <Link to="/signup" className="underline font-semibold">
            Sign Up
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default Login;
