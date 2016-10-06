var gulp = require('gulp');
var requireDir = require('require-dir');
var tasks = requireDir('./gulp_tasks', { recurse: true });

gulp.task('build', [
	'html',
	'svg',
	'images',
	'styles',
	'scripts',
	'vendor-styles',
	'vendor-scripts'
]);

gulp.task('default', [
	'cleanup', 
	'build',
	'connect',
	'watch'
]);