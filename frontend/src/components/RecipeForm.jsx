import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { createRecipe, updateRecipe, getRecipeById } from '../services/api';

const RecipeForm = ({ recipeId }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    if (recipeId) {
      const fetchRecipe = async () => {
        const response = await getRecipeById(recipeId);
        const { title, description, ingredients, instructions } = response.data;
        setTitle(title);
        setDescription(description);
        setIngredients(ingredients.join(', '));
        setInstructions(instructions);
      };
      fetchRecipe();
    }
  }, [recipeId]);

  const handleSubmit = async (e) => {
    e.preventDefault()
    const recipeData = {
      title,
      description,
      ingredients: ingredients.split(',').map((item) => item.trim()),
      instructions,
      author: user[0].username
    };
    if (recipeId) {
        console.log("update")
      await updateRecipe(recipeId, recipeData);
    } else {
        console.log("create")
      await createRecipe(recipeData);
    }

    navigate('/dashboard');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
          Title
        </label>
        <input
          id="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
          Description
        </label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="ingredients">
          Ingredients (comma separated)
        </label>
        <input
          id="ingredients"
          type="text"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="instructions">
          Instructions
        </label>
        <textarea
          id="instructions"
          value={instructions}
          onChange={(e) => setInstructions(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      <div className="flex items-center justify-between">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          {recipeId ? 'Update Recipe' : 'Add Recipe'}
        </button>
      </div>
    </form>
  );
};

export default RecipeForm;
