module.exports = {
  mode: "production",
  entry: "./src/index.ts",
  output: {
    clean: true,
    filename: 'bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
};
