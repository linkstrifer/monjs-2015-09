var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

//JS hint task

gulp.task('js:hint', function() {
	return gulp.src(['demo/js/base/*.js', 'demo/js/base/**/*.js'])
		.pipe($.jshint())
		//.pipe($.jshint.reporter('default'))
		.pipe($.jshint.reporter('jshint-stylish'))
		.pipe($.jshint.reporter('fail'));
});

//JS build dev task

gulp.task('js:build:dev', function() {
	return gulp.src(['demo/js/base/*.js', 'demo/js/base/**/*.js'])
	.pipe($.sourcemaps.init())
	.pipe($.concat('scripts.js'))
	.pipe($.uglify())
	.pipe($.sourcemaps.write('./maps'))
	.pipe(gulp.dest('demo/js/prod'));
});

//JS build prod task

gulp.task('js:build:prod', function() {
	return gulp.src(['demo/js/base/*.js', 'demo/js/base/**/*.js'])
	.pipe($.concat('scripts.js'))
	.pipe($.uglify())
	.pipe(gulp.dest('demo/js/prod'));
})

//JS dev task

gulp.task('js:dev', ['js:hint', 'clean:js', 'js:build:dev']);

//JS prod task

gulp.task('js:prod', ['js:hint', 'clean:js', 'js:build:prod']);
