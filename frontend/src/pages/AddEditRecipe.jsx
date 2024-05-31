import React from 'react';
import { useParams } from 'react-router-dom';
import RecipeForm from '../components/RecipeForm';

const AddEditRecipe = ({ isAuthenticated }) => {
  const { id } = useParams();
console.log(id)
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">{id ? 'Edit Recipe' : 'Add Recipe'}</h1>
      {isAuthenticated ? <RecipeForm recipeId={id} />  : <p>Please log in to see your profile.</p>}
    </div>
  );
};

export default AddEditRecipe;
