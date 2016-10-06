var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');
var uncss = require('gulp-uncss');
var cleancss = require('gulp-clean-css');

gulp.task('vendor-styles', function() {
    return gulp.src([
            './app/_assets/styles/vendor/**/*.css'
        ])
    	.pipe(sourcemaps.init())
        .pipe(concat('vendor.css'))
        .pipe(uncss({
            html: ['./public/**/*.html']
        }))
        .pipe(cleancss({compatibility: 'ie8'}))
	    .pipe(sourcemaps.write())
        .pipe(gulp.dest('./public/assets/styles'))
        .pipe(browserSync.stream());
});