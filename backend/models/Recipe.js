const mongoose = require('mongoose');

const RecipeSchema = new mongoose.Schema({
  title: {
      type: String,
      required: true
  },
  description: String,
  ingredients: [String],
  instructions: String,
  author: String,
  createdAt: {
      type: Date,
      default: Date.now
  },
});

RecipeSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

module.exports = mongoose.model('Recipe', RecipeSchema);
