const mongoose = require('mongoose');

const { Schema } = mongoose;

const Album = new Schema({
  title: String,
  artist: String,
  rdate: String,
  producer: String,
  lylics: String,
  composition: [String],
  lyricist: [String],
  album_title: String,
  num: String
});

module.exports = mongoose.model('Album', Album);

