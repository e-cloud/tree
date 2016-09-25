const srcContext = require.context('../src', true, /\.js$/)
srcContext.keys().forEach(srcContext)


// require all modules ending in ".spec.js" from the
// current directory and all subdirectories

const testsContext = require.context('.', true, /\.spec\.js$/)
testsContext.keys().forEach(testsContext)
