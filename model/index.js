const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
  imdbId: {
    required: true,
    type: String,
  },
  title: {
    required: true,
    type: String,
  },
  year: {
    required: true,
    type: String,
  },
  runtime: {
    required: true,
    type: String,
  },
  genre: {
    required: true,
    type: String,
  },
  writers: {
    required: true,
    type: String,
  },
  plot: {
    type: String,
  },
  images: {
    required: true,
    type: Array,
  },
  imdbRating: {
    type: String,
  },
});

module.exports = mongoose.model("imdb", dataSchema);
