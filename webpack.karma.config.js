module.exports = {
    // karma watches the test entry points
    // (you don't need to specify the entry option)
    // webpack watches dependencies

    // webpack configuration
    output: {
        pathinfo: true
    },
    devtool: 'inline-source-map',
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(bower_components|node_modules)/,
                loader: 'babel'
            }
        ]
    }
};
