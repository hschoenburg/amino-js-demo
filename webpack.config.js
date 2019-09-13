const path = require('path')

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  node: { Buffer: true },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },

  devServer: {
    contentBase: './dist',
    proxy: {
      '/nameservice': 'http://localhost:1317',
      '/auth': 'http://localhost:1317',
      '/rpc': {
        target: 'http://localhost:26657',
        pathRewrite: { '^/rpc': '' }
      }
    }
  }
}
