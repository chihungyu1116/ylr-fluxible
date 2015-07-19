var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true,
    //quiet: true,
    proxy: {
        '*': { target: 'http://localhost:3001' }
    }
}).listen(5000, function () {
    console.log('Webpack Dev Server listening on port 5000');
});
