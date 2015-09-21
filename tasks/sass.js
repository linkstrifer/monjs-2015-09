var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var browserSync = require('browser-sync').get('demo');

var sassConfig = {
	outputStyle: 'compressed'
};

//Sass dev
// compresed with sourcemaps and autoprefixer

gulp.task('sass:dev', ['clean:css'], function() {

	return gulp.src('demo/styles/sass/base.scss')
		.pipe($.sourcemaps.init())
			.pipe($.sass(sassConfig))
			.pipe($.autoprefixer())
		.pipe($.sourcemaps.write('./maps'))
		.pipe(gulp.dest('demo/styles/css'))
		.pipe(browserSync.stream());
});

//Sass prod

gulp.task('sass:prod', ['clean:css'], function() {
	return gulp.src('demo/styles/sass/base.scss')
		.pipe($.sass(sassConfig))
		.pipe($.autoprefixer())
		.pipe(gulp.dest('demo/styles/css'))
});
