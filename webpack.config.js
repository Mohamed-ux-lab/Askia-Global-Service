const path = require('path');

module.exports = {
  entry: './public/assets/js/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
};