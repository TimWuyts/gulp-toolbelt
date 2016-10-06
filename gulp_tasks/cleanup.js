var gulp = require('gulp');
var del = require('del');

gulp.task('cleanup', function () {
    return del.sync(['./public/**', '!public']);
});