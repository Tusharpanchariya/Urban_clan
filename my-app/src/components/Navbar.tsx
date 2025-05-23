// src/components/Navbar.tsx

import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-indigo-600">
          ServeSmart
        </Link>
        <nav className="space-x-6">
          <Link to="/login" className="text-gray-700 hover:text-indigo-600 font-medium">Login</Link>
          <Link to="/signup" className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 font-medium">Sign Up</Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
