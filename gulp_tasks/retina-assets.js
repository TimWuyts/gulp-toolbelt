var gulp = require('gulp');
var changed = require('gulp-changed');
var gm = require('gulp-gm');
var rename = require("gulp-rename");

gulp.task('retina-assets', function() {
    return gulp.src([
    		'./app/_assets/images/**/*@2x.*',
    	])
    	.pipe(changed('./public/assets/images'))
    	.pipe(rename(function(path) {
		    path.basename = path.basename.replace('@2x', '@1x');
		}))
    	.pipe(gm(function(gmfile) {
 			return gmfile.resize(50, null, '%');
    	}))
        .pipe(gulp.dest('./app/_assets/images'));
});