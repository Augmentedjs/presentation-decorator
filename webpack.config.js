const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  context: __dirname,
  target: "web",
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'presentation-decorator.js',
    publicPath: '/dist/',
    library: "presentation-decorator",
    globalObject: 'this',
    libraryTarget: "umd",
    umdNamedDefine: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  externals: {
    'next-core-utilities': {
      commonjs: 'next-core-utilities',
      commonjs2: 'next-core-utilities',
      amd: 'next-core-utilities',
      root: 'next-core-utilities'
    },
    'presentation-mediator': {
      commonjs: 'presentation-mediator',
      commonjs2: 'presentation-mediator',
      amd: 'presentation-mediator',
      root: 'presentation-mediator'
    },
    'presentation-models': {
      commonjs: 'presentation-models',
      commonjs2: 'presentation-models',
      amd: 'presentation-models',
      root: 'presentation-models'
    },
    'presentation-dom': {
      commonjs: 'presentation-dom',
      commonjs2: 'presentation-dom',
      amd: 'presentation-dom',
      root: 'presentation-dom'
    },
    'presentation-widget': {
      commonjs: 'presentation-widget',
      commonjs2: 'presentation-widget',
      amd: 'presentation-widget',
      root: 'presentation-widget'
    }
  },
  stats: "errors-only",
  devtool: "source-map",
  plugins: [
    new webpack.DefinePlugin({
      VERSION: JSON.stringify(require("./package.json").version)
    })
  ]
};
