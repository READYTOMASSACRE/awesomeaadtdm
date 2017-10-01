module.exports = {
  entry: './app.ts',
  output: {
    filename: 'bundles/bundle.js'
  },
  resolve: {
    extensions: ['.webpack.js', '.web.js', '.ts', '.js']
  },
  module: {
    loaders: [
      { test: /\.ts$/, loader: 'babel-loader!ts-loader' }
    ]
  }
}
