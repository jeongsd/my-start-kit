import webpack from 'webpack';
import path from 'path';

const rootPath = path.join(__dirname, '../../');
const AUTOPREFIXER_BROWSERS = JSON.stringify({
  browsers: [
    'last 2 version',
    'ie >= 9',
  ],
});

export default {
  entry: [
    path.join(rootPath, 'examples/app.js'),
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/dev-server',
  ],
  output: {
    path: path.join(__dirname),
    filename: 'bundle.js',
    publicPath: '/assets/',
  },
  resolve: {
    alias: {
      myApp: path.join(rootPath, 'src/myApp.js'),
    },
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel' },
      { test: /\.css$/, loaders: ['style', 'css', 'postcss'] },
    ],
  },
  postcss: () => {
    return [
      require('precss')(),
      require('autoprefixer')({
        browsers: AUTOPREFIXER_BROWSERS,
      }),
    ];
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"development"',
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
};
