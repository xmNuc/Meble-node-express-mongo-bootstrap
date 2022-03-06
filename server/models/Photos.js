const mongoose = require('mongoose');

const photosSchema = new mongoose.Schema({
  type: {
    type: String,
  },
  key: {
    type: String,
  },
  name_en: {
    type: String,
  },
  name_pl: {
    type: String,
  },
  description_en: {
    type: String,
  },
  description_pl: {
    type: String,
  },
  image: {
    type: String,
  },
  thumb: {
    type: String,
  },
});

module.exports = mongoose.model('Photos', photosSchema);
