var gulp = require('gulp');

//Default task
// Default task run Dev task

gulp.task('default', ['dev'], function(){
	return console.log('Running dev task.')
});