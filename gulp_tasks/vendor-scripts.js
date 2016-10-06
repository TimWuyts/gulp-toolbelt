var gulp = require('gulp');
var concat = require('gulp-concat');

gulp.task('vendor-scripts', function() {
    return gulp.src([
            './app/_assets/scripts/vendor/**/*.js'
        ])
        .pipe(concat('vendor.js'))
        .pipe(gulp.dest('./public/assets/scripts'));
});