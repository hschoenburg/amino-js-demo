const path = require('path');

module.exports = {
mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
resolve: {
        // options for resolving module requests
        // (does not apply to resolving to loaders)
        modules: ['node_modules'],
        // directories where to look for modules
        extensions: [ ".js",".ts", ".vue"]
},


devServer: {
  contentBase: './dist'
   }
};
