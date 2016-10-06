var gulp = require('gulp');
var twig = require('gulp-twig');

gulp.task('html', function() {
    return gulp.src([
    	'./app/**/*.html',
    	'!./app/_*/**/*.html',
    	])
    	.pipe(twig({
    		data: {
    			base_path: '/'
    		}
    	}))
    	.pipe(gulp.dest('./public/'));
});