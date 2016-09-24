const path = require('path')

module.exports = {
    // karma watches the test entry points
    // (you don't need to specify the entry option)
    // webpack watches dependencies

    // webpack configuration
    output: {
        pathinfo: true,
        devtoolModuleFilenameTemplate(info) {
            return `file:///${info.absoluteResourcePath.replace(/\\/g, '/')}`
        }
    },
    devtool: 'inline-source-map',
    recordsPath: path.resolve(__dirname, '.tmp/webpack-records.json'),
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(bower_components|node_modules)/,
                loader: 'babel?cacheDirectory'
            }
        ]
    }
}
