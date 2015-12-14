
import express from 'express';
import nunjucks from 'nunjucks';
import webpack from 'webpack';
import webpackConfig from './webpack.config';

const app = express();

app.use(express.static('public'));

nunjucks.configure('views', {
    autoescape: true,
    express: app
});

const compiler = webpack(webpackConfig);
app.use(require('webpack-dev-middleware')(compiler, { noInfo: true, publicPath: '/js/' }));
app.use(require('webpack-hot-middleware')(compiler))


app.get('/', function(req, res) {
    res.render('index.html');
});


app.listen(3000);
