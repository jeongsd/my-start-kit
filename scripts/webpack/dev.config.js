import webpack from 'webpack';
import path from 'path';
import precss from 'precss';
import autoprefixer from 'autoprefixer';

const rootPath = path.join(__dirname, '../../');

export default {
  entry: [
    path.join(rootPath, 'src/MyApp.js'),
  ],
  output: {
    path: path.join(__dirname),
    filename: 'bundle.js',
    publicPath: '/assets/',
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel' },
      { test: /\.css$/, loaders: ['style', 'css', 'postcss'] },
    ],
  },
  postcss: () => {
    return [
      precss(),
      autoprefixer({
        browsers: [
          'last 2 version',
          'ie >= 10',
        ],
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
