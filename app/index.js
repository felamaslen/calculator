/* eslint-disable global-require */
const path = require('path');
const express = require('express');
const winston = require('winston');
const webpack = require('webpack');
const { version } = require('../package.json');

function run() {
    const app = express();

    app.set('view engine', 'ejs');
    app.set('views', path.join(__dirname, '../src/templates'));

    app.get('/', (req, res) => res.render('index', {
        htmlWebpackPlugin: {
            options: {
                version,
                externalStyles: process.env.NODE_ENV === 'production' ||
                    (req.query.prod && req.query.prod === 'true')
            }
        }
    }));

    if (process.env.NODE_ENV === 'development') {
        const webpackConfig = require('../webpack.config')();

        const compiler = webpack(webpackConfig);

        app.use(require('webpack-dev-middleware')(compiler, {
            publicPath: webpackConfig.output.publicPath,
            stats: {
                colors: true,
                modules: false,
                chunks: false,
                reasons: false
            },
            hot: true,
            quiet: false,
            noInfo: false
        }));

        app.use(require('webpack-hot-middleware')(compiler, {
            log: console.log
        }));
    }

    app.use(express.static(path.join(__dirname, '../static')));

    const port = process.env.PORT || 3000;

    app.listen(port, () => {
        winston.log('info', `Server listening on port ${port}`);
    });
}

module.exports = {
    run
};

