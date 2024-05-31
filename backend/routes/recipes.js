const express = require('express');
const { getRecipes, getRecipeById, createRecipe, getUserRecipes, updateRecipe, deleteRecipe } = require('../controllers/recipeController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/', getRecipes);
router.get('/:id', getRecipeById);
router.post('/', createRecipe);
router.delete('/:id', deleteRecipe)

/*
router.put('/:id', authMiddleware, updateRecipe);;
*/
module.exports = router;
