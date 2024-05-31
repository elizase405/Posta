const Recipe = require('../models/Recipe');

exports.getRecipes = async (req, res) => {
    Recipe.find({}).then(data => res.json(data)).catch(err => console.log(err))
};

exports.getRecipeById = async (req, res) => {
    try {
        const recipe = await Recipe.findById(req.params.id);
        if (!recipe) {
            return res.status(404).json({ message: 'Recipe not found' });
        }
        res.json(recipe);
  } catch (err) {
        console.error(err.message);
        if (err.kind === 'ObjectId') {
            return res.status(404).json({ message: 'Recipe not found' });
        }
        res.status(500).send('Server Error');
  }
};

exports.createRecipe = async (req, res) => {
  const { title, description, ingredients, instructions, author } = req.body;

  try {
    const newRecipe = new Recipe({
      title,
      description,
      ingredients,
      instructions,
      author
    });

    const recipe = await newRecipe.save();
    res.json(recipe);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

exports.updateRecipe = async (req, res) => {
  // Logic to update a recipe
};

exports.deleteRecipe = async (req, res) => {
    const { id } = req.params;
    try {
    // Find the recipe by ID
    const recipe = await Recipe.findById(id);

    // Check if the recipe exists
    if (!recipe) {
      return res.status(404).json({ message: 'Recipe not found' });
    }

    // Delete the recipe
    await Recipe.findByIdAndDelete(id);

    res.json({ message: 'Recipe deleted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};





