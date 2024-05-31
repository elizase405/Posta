import React, { useEffect, useState } from 'react';
import Profile from '../components/Profile';
import RecipeCard from '../components/RecipeCard';
import { getAllRecipes } from '../services/api';

const Home = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      const response = await getAllRecipes();
      setRecipes(response);
      localStorage.setItem('recipe', JSON.stringify(response))
    };
    fetchRecipes();
  }, []);
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">Recipes</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {recipes.map(recipe => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default Home;
/*
export const signup = (user) => api.post('/users', user);
*/