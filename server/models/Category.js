const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
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
    required: 'This field is required',
  },
});

module.exports = mongoose.model('Category', categorySchema);
