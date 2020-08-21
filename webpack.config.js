const path = require('path');

var webpackConfig = {
    mode: 'none',
    devtool: "source-map",
    entry: {
        main: "./src/index.js",
       
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: '[name].min.js',
        library: 'mars_mg_sdk',
        libraryTarget: "umd"
    },
};
module.exports = webpackConfig;