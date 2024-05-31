import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getRecipeById, deleteRecipe } from '../services/api';

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    const fetchRecipe = async () => {
      const response = await getRecipeById(id);
      setRecipe(response);
    };
    fetchRecipe();
  }, [id]);

  const handleDelete = async () => {
    await deleteRecipe(id);
    navigate('/');
  };

  const handleEdit = () => {
    navigate(`/edit-recipe/${id}`);
  };

  if (!recipe) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">{recipe.title}</h1>
      <p className="mb-4">{recipe.description}</p>
      <h2 className="text-2xl font-bold mb-2">Ingredients</h2>
      <ul className="list-disc ml-6 mb-4">
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h2 className="text-2xl font-bold mb-2">Instructions</h2>
      <p className="mb-4">{recipe.instructions}</p>
      <p className="text-sm text-gray-600">Recipe by {recipe.author}</p>

      {user && user[0].username === recipe.author && (
        <div className="flex space-x-2 mt-4">
          <button
            onClick={handleEdit}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Edit
          </button>
          <button
            onClick={handleDelete}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          >
            Delete
          </button>
        </div>
      )}
    </div>
  );
};

export default RecipeDetail;
