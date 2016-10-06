var gulp = require('gulp');

gulp.task('watch', function() {
    gulp.watch('./app/_assets/scripts/**/*.js', { interval: 500 }, ['scripts']).on('change', browserSync.reload);
    gulp.watch('./app/**/*.html', { interval: 500 }, ['html']).on('change', browserSync.reload);
    gulp.watch('./app/_assets/styles/**/*.css', { interval: 500 }, ['styles']);
});