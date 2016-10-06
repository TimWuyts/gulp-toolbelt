var gulp = require('gulp');
var changed = require('gulp-changed');
var svgmin = require('gulp-svgmin');

gulp.task('svg', function() {
    return gulp.src([
    		'./app/_assets/images/**/*.svg'
    	])
    	.pipe(changed('./public/assets/images'))
    	.pipe(svgmin({
    		plugins: [{ convertShapeToPath: false }]
    	}))
      .pipe(gulp.dest('./public/assets/images'));
});