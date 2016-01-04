import express 'express';
import rewrite 'express-urlrewrite';
import webpack 'webpack';
import webpackDevMiddleware 'webpack-dev-middleware';
import WebpackConfig './webpack.config';

var app = express();

app.use(webpackDevMiddleware(webpack(WebpackConfig), {
  publicPath: '/__build__/',
  stats: {
    colors: true
  }
}))

var fs = require('fs')
var path = require('path')

fs.readdirSync(__dirname).forEach((file) => {
  if (fs.statSync(path.join(__dirname, file)).isDirectory()) {
    app.use(rewrite('/' + file + '/*', '/' + file + '/index.html'))
  }
})

app.use(express.static(__dirname))

app.listen(8080, () => {
  console.log('Server listening on http://localhost:8080, Ctrl+C to stop')
})
