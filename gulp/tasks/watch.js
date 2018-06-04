'use strict';

module.exports = function() {
  $.gulp.task('watch', function() {
    $.gulp.watch('./source/js/**/*.js', $.gulp.series('js:process'));
    $.gulp.watch('./source/style/**/*.scss', $.gulp.series('sass'));
    $.gulp.watch('./source/template/**/*.pug', $.gulp.series('pug'));
    $.gulp.watch('./source/images/general/**/*.*', $.gulp.series('copy:image'));
    $.gulp.watch('./source/images/svg/**/*.*', $.gulp.series('sprite:svg'));
    $.gulp.watch('./source/js/pages/homes.js', $.gulp.series('copy:js'));
    $.gulp.watch('./source/js/pages/form-send.js', $.gulp.series('copy:js'));
  });
};
