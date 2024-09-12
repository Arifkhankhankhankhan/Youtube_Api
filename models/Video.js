const mongoose = require('mongoose');

// Define the schema for storing video information

const VideoSchema = new mongoose.Schema({
  _id: String,
  Title: String,
  Description: String,
  tags: [String],
  Thumbnails_urls: String,
  publishedDate: { type: Date, default: Date.now }
})

VideoSchema.index({ title: 'text', tags: 'text' });

const Video = mongoose.model('Video', VideoSchema);

module.exports = Video;
