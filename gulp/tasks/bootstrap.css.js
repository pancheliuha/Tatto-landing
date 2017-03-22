'use strict';

module.exports = function() {
    $.gulp.task('bootstrap:css', function() {
        return $.gulp.src($.path.bootstrap)
            .pipe($.gp.concat('bootstrap.css'))
            .pipe($.gulp.dest($.config.root + '/assets/css'))
    })
};
