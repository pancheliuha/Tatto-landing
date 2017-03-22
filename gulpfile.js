'use strict';

global.$ = {
  package: require('./package.json'),
  config: require('./gulp/config'),
  path: {
    task: require('./gulp/paths/tasks.js'),
      bootstrap: require('./gulp/paths/bootstrap.css.js'),
    cssFoundation: require('./gulp/paths/css.foundation.js'),
  },
  gulp: require('gulp'),
  rimraf: require('rimraf'),
  browserify: require('browserify'),
  vinyl: require('vinyl-source-stream'),
  buffer: require('vinyl-buffer'),
  browserSync: require('browser-sync').create(),
  gp: require('gulp-load-plugins')()
};

$.path.task.forEach(function(taskPath) {
  require(taskPath)();
});

$.gulp.task('default', $.gulp.series(
  'clean',
  $.gulp.parallel(
    'sass',
    'html',
    'bootstrap:css',
    'copy_fonts',
    'copy:image',
    'css:foundation'
  ),
  $.gulp.parallel(
    'css:min',
    'watch',
    'serve'
  )
));
