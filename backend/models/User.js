const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
  username: {
      type: String,
      required: true,
      unique: true
  },
  email: {
      type: String,
      required: true,
      unique: true
  },
  name: {
      type: String,
      required: true
  },
  password: {
      type: String,
      required: true
  },
});

UserSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

module.exports = mongoose.model('User', UserSchema);
