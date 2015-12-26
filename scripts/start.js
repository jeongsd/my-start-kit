import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import config from './webpack/dev.config.js';
import path from 'path';

const ROOT_PATH = path.join(__dirname, '../');

const compiler = webpack(config);

const server = new WebpackDevServer(compiler, {
  hot: true,
  contentBase: path.join(ROOT_PATH, 'examples/'),
  stats: { colors: true },
});

server.listen(8080, 'localhost', () => {
  console.log('server on localhost:8080');
});
