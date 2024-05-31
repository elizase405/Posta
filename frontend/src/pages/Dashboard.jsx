import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Profile from '../components/Profile';
import RecipeCard from '../components/RecipeCard';

const Dashboard = ({ isAuthenticated }) => {
  const [userRecipes, setUserRecipes] = useState([]);
  let user = JSON.parse(localStorage.getItem('user'));
  const recipe = JSON.parse(localStorage.getItem('recipe'));
  const my_recipes = recipe.filter(recipe => recipe.author === user[0].username && recipe)

  useEffect(() => {
    const fetchUserRecipes = () => {
      setUserRecipes(my_recipes);
    };
    fetchUserRecipes();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">Dashboard</h1>
      <Profile isAuthenticated={isAuthenticated} />
      <h2 className="text-2xl font-bold mt-6">My Recipes</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {userRecipes.map(recipe => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
