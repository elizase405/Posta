import React from 'react';
import { useState } from "react"
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import RecipeDetail from './pages/RecipeDetail';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import AddEditRecipe from './pages/AddEditRecipe';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
const [authToken, setAuthToken] = useState(localStorage.getItem('token'));

  const handleLogin = (token) => {
    setAuthToken(token);
    localStorage.setItem('token', token);
  };

  const handleLogout = () => {
    setAuthToken(null);
    localStorage.removeItem('token');
  };
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar isAuthenticated={!!authToken} logout={handleLogout} />
        <main className="flex-grow container mx-auto p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/recipes/:id" element={<RecipeDetail />} />
            <Route path="/api/auth/login" element={<Login />} />
            <Route path="/api/auth/signup" element={<Signup />} />
            <Route path="/dashboard" element={<Dashboard isAuthenticated={!!authToken} />} />
            <Route path="/add-recipe" element={<AddEditRecipe isAuthenticated={!!authToken}/>} />
            <Route path="/edit-recipe/:id" element={<AddEditRecipe />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
