var fs = require('fs');
var browserify = require('browserify');

module.exports = function compilePlugin(pluginName) {
    browserify('./plugins/' + pluginName + '.js')
        .transform('babelify', { presets: ['es2015', 'react'] })
        .bundle()
        .pipe(fs.createWriteStream('./plugins-comp/' + pluginName + '.js'));
}
