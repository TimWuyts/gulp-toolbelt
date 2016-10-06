var gulp = require('gulp');
browserSync = require('browser-sync').create();

gulp.task('connect', function () {
    browserSync.init({
        server: {
           baseDir: "./public"
        },
        // proxy: "localhost",
        browser: "google chrome"
    });
});