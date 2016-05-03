const path = require('path')
const webpack = require('webpack')
const autoprefixer = require('autoprefixer')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const TransferWebpackPlugin = require('transfer-webpack-plugin')

module.exports = {
  context: __dirname,
  devtool: 'inline-source-map',
  entry: [
    'webpack-hot-middleware/client',
    './app/index.js'
  ],
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'docs.js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['', '.js', '.json', '.scss', '.md'],
    packageMains: ['browser', 'web', 'browserify', 'main', 'style'],
    alias: {
      'react-fabric': path.resolve(__dirname, '..', 'src')
    },
    modulesDirectories: [
      'node_modules',
      path.resolve(__dirname, './node_modules'),
      path.resolve(__dirname, './../src')
    ]
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel'
      }, {
        test: /\.(scss|css)$/,
        loader: ExtractTextPlugin.extract('style', 'css?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss!sass?sourceMap') // eslint-disable-line
      }, {
        test: /\.json$/, loader: 'json'
      }, {
        test: /\.md$/,
        loader: 'html!highlight!markdown'
        // test: /\.md$/, loader: 'raw'
      }
      // }, {
      //   test: /\.(txt)$/,
      //   loader: 'raw',
      //   include: path.resolve(__dirname, './app/components/layout/main/modules')
      // }, {
      //   test: /\.(md)$/,
      //   loader: 'html!highlight!markdown'
      // }
    ]
  },
  postcss: [autoprefixer],
  plugins: [
    new ExtractTextPlugin('docs.css', { allChunks: true }),
    new TransferWebpackPlugin([{
      from: 'www/images',
      to: 'images'
    }], path.resolve(__dirname, './')),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    })
  ]
}