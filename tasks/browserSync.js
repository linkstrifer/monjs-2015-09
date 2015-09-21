var gulp = require('gulp');
var browserSync = require('browser-sync').create('demo');


//Normal site

gulp.task('browser:demo', function() {
	var config = {
		server: {
			baseDir: './demo'
		},
		open: false
	};

	browserSync.init(config);
});

//Proxy site

gulp.task('browser:proxy', function() {
	var config = {
		proxy: 'localhost:8000',
		open: false
	};

	browserSync.init(config);
});

//Reload site

gulp.task('browser:reload', function() {
	return browserSync.reload();
});
