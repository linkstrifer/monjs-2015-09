var gulp = require('gulp');
var del = require('del');

//Clean css

gulp.task('clean:css', function() {
	return del('demo/styles/css/**');
});

//Clean js

gulp.task('clean:js', function() {
	return del('demo/js/prod/**');
});
