const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, minlength: 6 },
  lastLogin: { type: String, required: true },
  highscore: [{ type: Number, required: true, maxlength: 8}]
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema);
