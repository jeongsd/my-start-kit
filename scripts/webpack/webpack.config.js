import webpack from 'webpack';
import path from 'path';

const rootPath = path.join(__dirname, '../../');

export default {
  entry: path.join(rootPath, 'src/myApp.js'),
  output: {
    path: path.join(rootPath, 'dist/'),
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel' },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"',
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
    }),
    new webpack.optimize.AggressiveMergingPlugin(),
  ],
};
