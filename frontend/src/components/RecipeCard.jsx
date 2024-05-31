import React from 'react';
import { Link } from 'react-router-dom';

const RecipeCard = ({ recipe }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{recipe.title}</div>
        <p className="text-gray-700 text-base">{recipe.description}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <Link to={`/recipes/${recipe.id}`} className="text-indigo-500">View Recipe</Link>
      </div>
    </div>
  );
};

export default RecipeCard;
