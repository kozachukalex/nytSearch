const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const articleSchema = new Schema({
  id: {
    type: String,
    trim: true,
    required: "id is required"
  },
  title: {
    type: String,
    trim: true,
    required: "title is required"
  },
  summary: {
    type: String,
    trim: true,
    required: "summary is Required"
  },
  author: {
    type: String,
    trim: true,
    required: "author is Required"
  }, 
  link: {
    type: String,
    trim: true,
    required: "link is Required"
  }
});

module.exports = mongoose.model('Article', articleSchema);