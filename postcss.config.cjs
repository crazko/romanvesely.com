const customMedia = require('postcss-custom-media');
const mediaMinmax = require('postcss-media-minmax');

module.exports = {
  plugins: [customMedia, mediaMinmax],
};
