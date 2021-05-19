module.exports = {
  entry: './client/src/index.jsx',
  output: {
    path: __dirname + './public',
    publicPath: '/',
    filename: 'summaryProxy.js'
  },
  // devServer: {
  //   contentBase: './client/dist',
  // },
  mode: 'development',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        //use: ['babel-loader']
        loader: 'babel-loader'
      },
      {
        test: /\.less$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'less-loader' }
        ]
      },
    ]
  },
};