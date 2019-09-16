const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './src/index.ts',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: 'inline-source-map',
  node: { Buffer: true },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: 'body',
      chunks: ['index'],
      filename: 'index.html'
    })
  ],
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
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
