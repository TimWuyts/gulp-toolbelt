var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var postcss = require('gulp-postcss');
var cssnext = require('postcss-cssnext');
var cssimport = require('postcss-import');
var concat = require('gulp-concat');
var uncss = require('gulp-uncss');
var cleancss = require('gulp-clean-css');

gulp.task('styles', function() {
    var processors = [
        cssimport(),
        cssnext()
    ];

    return gulp.src([
          	'./app/_assets/styles/*.css',
        ])
    	.pipe(sourcemaps.init())
        .pipe(postcss(processors))
        .pipe(concat('screen.css'))
        .pipe(uncss({
           html: ['./public/**/*.html']
        }))
        .pipe(cleancss({compatibility: 'ie8'}))
	    .pipe(sourcemaps.write())
        .pipe(gulp.dest('./public/assets/styles'))
        .pipe(browserSync.stream());
});