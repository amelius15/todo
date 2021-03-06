module.exports = {
  entry: [
    './src/index.js'
  ],  
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'react-hot!babel'
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: __dirname + '/js',
    publicPath: '/',
    filename: 'app.js'
  },
  devServer: {
    contentBase: './js',
    hot: true
  }
};