/* eslint-disable no-sync, init-declarations */
const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');

const webpackConfig = require('./conf.common');
const moduleConfigDev = require('./module.dev');

module.exports = (...args) => ({
    ...webpackConfig,
    devtool: 'cheap-module-eval-source-map',
    entry: [
        `webpack-dev-server/client?http://0.0.0.0:${process.env.PORT_WDS}`,
        'webpack/hot/only-dev-server',
        'react-hot-loader/patch',
        ...webpackConfig.entry
    ],
    plugins: [
        ...webpackConfig.plugins(...args),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('development')
            }
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new Dotenv({ path: '.env' })
    ],
    module: moduleConfigDev,
    devServer: {
        stats: {
            colors: true,
            modules: false,
            chunks: false,
            reasons: true
        },
        hot: true,
        quiet: false,
        noInfo: false,
        publicPath: '/',
        port: process.env.PORT_WDS,
        proxy: {
            '/': {
                target: `http://localhost:${process.env.PORT}`,
                secure: false
            }
        }
    }
});
