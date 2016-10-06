var gulp = require('gulp');
var changed = require('gulp-changed');
var imagemin = require('gulp-imagemin');

gulp.task('images', ['retina-assets'], function() {
    return gulp.src([
    		'./app/_assets/images/**/*',
    		'!./app/_assets/images/**/*.svg'
    	])
    	.pipe(changed('./public/assets/images'))
    	.pipe(imagemin())
        .pipe(gulp.dest('./public/assets/images'));
});