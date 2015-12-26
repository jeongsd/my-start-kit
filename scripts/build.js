import webpack from 'webpack';
import config from './webpack/webpack.config.js'

const compiler = webpack(config);

compiler.run((err, stats) => {
  console.log(stats.toString({
    colors: true,
  }));
});
