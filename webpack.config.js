const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const cssnano = require('cssnano');

// JavaScript rule that specifies what to do with .js files
const javascript = {
  test: /\.(js)$/,
  use: [{
    loader: 'babel-loader',
    options: {
      presets: ['env']
    }
  }]
};

const styles = {
  test: /\.(css)$/,
  use: ExtractTextPlugin.extract('css-loader')
};

const config = {
  devtool: 'source-map',
  entry: {
    App: './public/js/hotspots.js'
  },
  output: {
    path: path.resolve(__dirname, 'public', 'dist'),
    // we can use "substitutions" in file names like [name] and [hash]
    // name will be `App` because that is what we used above in our entry
    filename: '[name].bundle.js'
  },
  module: {
    rules: [javascript, styles]
  },
  plugins: [
    new ExtractTextPlugin('style.bundle.css'),

    // this plugin doesn't allow the css source map show
    new OptimizeCssAssetsPlugin({
      cssProcessor: cssnano,
      canPrint: true
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true
    }),
    /**
     * Many libraries will key off the process.env.NODE_ENV variable to determine what should be included in the library.
     * For example, when not in production some libraries may add additional logging and testing to make debugging easier
     * with process.env.NODE_ENV === 'production' they might drop or add significant portions of code to optimize how things run for your actual users
     * We use webpack's built in DefinePlugin to define this variable for all our dependencies
     */
    new webpack.DefinePlugin({
      // plugin does a direct text replacement; hence the double quotes
      'process.env.NODE_env': '"production"'
    })
  ]
};


module.exports = config;
