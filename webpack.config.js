const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    clean: true,
    filename: 'bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['css-loader']
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin(
      {
        template: './public/index.html'
      }
    )
  ],

  // devSer
};
