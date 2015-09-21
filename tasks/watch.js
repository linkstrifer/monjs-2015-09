var gulp = require('gulp');

//Watch styles 
// Watch sass files and run sass:dev task

gulp.task('watch:styles', ['styleguide:watch'], function() {
	return gulp.watch(['demo/styles/sass/*.scss', 'demo/styles/sass/**/*.scss'], ['sass:dev']);
});

//Watch html
// Watch html files changes and run browser:reload task

gulp.task('watch:html', function() {
	return gulp.watch(['demo/*.html', 'demo/**/*.html'], ['browser:reload']);
});

//Watch js
// Watch js files changes and run js:dev

gulp.task('watch:js', function() {
	return gulp.watch(['demo/js/base/*.js', 'demo/js/base/**/*.js'], ['js:dev', 'browser:reload']);
});

//Watch
// Global Watch task

gulp.task('watch', ['watch:styles', 'watch:html', 'watch:js']);
