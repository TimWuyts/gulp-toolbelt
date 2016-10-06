var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');
var babel = require('gulp-babel');
var minify = require('gulp-minify');

gulp.task('scripts', function() {
    return gulp.src([
            './app/_assets/scripts/**/*.js',
            '!./app/_assets/scripts/vendor/**/*.js'
        ])
    	.pipe(sourcemaps.init())
    	.pipe(babel({
            presets: ['es2015']
        }))
        .pipe(concat('application.js'))
        .pipe(minify({
	        ext:{
	            src:'.js',
	            min:'.min.js'
	        },
	        ignoreFiles: ['.pack.js', '-pack.js', '.min.js', '-min.js']
	    }))
	    .pipe(sourcemaps.write())
        .pipe(gulp.dest('./public/assets/scripts'));
});