
var webpack = require('webpack');
var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  entry: ['./app/boostrap.jsx'],
  output: {
    filename: '[name].js',
    path: './build',
    publicPath: '/'
  },
  
  module: {
    loaders: [
      { 
        test: /(\.js|.jsx)$/, exclude: /node_modules/,
        loaders: [
          'babel'
        ] 
      },
      { test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader") }
    ]
  },

 plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        screw_ie8: true,
        warnings: false
      }
    }),
    new ExtractTextPlugin("styles.css"),
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.optimize\.css$/g,
      cssProcessor: require('cssnano'),
      cssProcessorOptions: { discardComments: {removeAll: true } },
      canPrint: true
    })
 ],

  devServer: {
    host: '0.0.0.0',
    port: 3000,
    inline: true
  },

}