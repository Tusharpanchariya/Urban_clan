// src/pages/Auth/Signup.tsx

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import AuthForm from '../../components/AuthForm';

const Signup = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center p-4">
      <motion.div
        className="bg-white/20 backdrop-blur-lg rounded-2xl shadow-xl p-8 w-full max-w-md"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold text-white text-center mb-6">Create Account</h2>
        <AuthForm type="signup" />
        <p className="text-white text-center mt-4">
          Already have an account?{' '}
          <Link to="/login" className="underline font-semibold">
            Log In
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default Signup;
