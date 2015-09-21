var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var styleguide = require('sc5-styleguide');

var styleguidePath = 'styleguide';

//Generate styleguide

gulp.task('styleguide:generate', function() {
	var styleguideConfig = {
		title: 'My Super Ultra Styleguide Arcade Remix Hyper Edition EX Plus Alpha Prime',
		server: true,
		rootPath: styleguidePath,
		overviewPath: 'README.md',
		port: 4000
	};

	return gulp.src(['demo/styles/sass/*.scss', 'demo/styles/sass/**/*.scss'])	
		.pipe(styleguide.generate(styleguideConfig))
		.pipe(gulp.dest(styleguidePath));
});

//Apply styles

gulp.task('styleguide:applystyles', function() {
	return gulp.src('demo/styles/sass/base.scss')
		.pipe($.sass())
		.pipe(styleguide.applyStyles())
		.pipe(gulp.dest(styleguidePath));
})

//Styleguide watch
// Watch sass changes and run styleguide task

gulp.task('styleguide:watch', function() {
	return gulp.watch(['demo/styles/sass/*.scss', 'demo/styles/sass/**/*.scss', 'README.md'], ['styleguide']);
});

//Global styleguide task

gulp.task('styleguide', ['styleguide:generate', 'styleguide:applystyles', 'styleguide:watch']);
