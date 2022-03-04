const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  type: {
    type: String,
    required: 'This field is required',
  },
  name_en: {
    type: String,
    required: 'This field is required',
  },
  name_pl: {
    type: String,
    required: 'This field is required',
  },
  image: {
    type: String,
  },
  description_en: {
    type: String,
  },
  description_pl: {
    type: String,
  },
  key: {
    type: String,
    required: 'This field is required',
  },
});

module.exports = mongoose.model('Category', categorySchema);
