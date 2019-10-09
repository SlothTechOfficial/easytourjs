const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
  entry:['./src/index.js','./src/scss/styles.scss'],
  output: {
      path: __dirname + '/dist',
      filename: "assets/js/[name].js",
      library: "MainModule",
  },
 
  devServer: {
    port: 3000
  },
  module: {
    rules: [
     // STYLES
     {
      test: /\.css$/,
      use: [
          'style-loader',
          {
              loader: 'css-loader',
              options: {
                  sourceMap: true
              }
          },
      ]
  },

  // CSS / SASS
    {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
            'css-loader',
            'sass-loader',
        ]
    }, 
     // BABEL
     {
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /(node_modules)/,
      options: {
          compact: true
      }
  },

    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new MiniCssExtractPlugin({
      filename: "assets/css/[name].css",
      chunkFilename:'assets/css/[name].[hash].css'
    }),
  ],
  mode: "development"
};
