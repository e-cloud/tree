// Karma configuration
const webpackKarmaConfig = require('./webpack.karma.config')
const os = require('os')

module.exports = function karmaConf(config) {
    const browserList = ['Chrome', 'Firefox']

    // if is windows platform, add IE to test list
    if (/^win/.test(os.platform())) browserList.push('IE')

    config.set({

        // base path that will be used to resolve all patterns (eg. files,
        // exclude)
        basePath: '',


        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['mocha', 'chai', 'sinon'],


        // list of files / patterns to load in the browser
        files: [
            'test/testEntry.js'
        ],


        // list of files to exclude
        exclude: [],


        // preprocess matching files before serving them to the browser
        // available preprocessors:
        // https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            'src/**/*.js': ['webpack'],
            'test/**/*.js': ['webpack']
        },

        webpack: webpackKarmaConfig,

        webpackMiddleware: {
            // webpack-dev-middleware configuration
            // i. e.
            stats: 'errors-only'
        },

        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['notify', 'mocha', 'coverage'],


        coverageReporter: {
            dir: 'coverage',
            reporters: [
                { type: 'lcov' },
                { type: 'text-summary' },
                { type: 'text-summary', file: 'text-summary.txt' }
            ]
        },


        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR ||
        // config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file
        // changes
        autoWatch: true,


        // start these browsers
        // available browser launchers:
        // https://npmjs.org/browse/keyword/karma-launcher
        browsers: browserList,


        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false,

        // Concurrency level
        // how many browser should be started simultaneous
        concurrency: Infinity
    })
}
