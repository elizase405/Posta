import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = ({ isAuthenticated, logout }) => {
  const navigate = useNavigate();

  return (
    <nav className="bg-blue-500 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl">Posta</Link>
        <div>
          {isAuthenticated ? (
            <>
              <Link to="/dashboard" className="mx-2">Dashboard</Link>
              <Link to="/add-recipe" className="mx-2">Add Recipe</Link>
              <button onClick={logout} className="mx-2">Logout</button>
            </>
          ) : (
            <>
            <Link to="/login" className="hover:bg-gray-800 p-2 rounded mr-4">Login</Link>
            <Link to="/signup" className="hover:bg-gray-800 p-2 rounded">Signup</Link>
          </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
