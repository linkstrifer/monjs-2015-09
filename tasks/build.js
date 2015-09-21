var gulp = require('gulp');

//Build dev

gulp.task('build:dev', ['sass:dev', 'js:dev']);

gulp.task('build:prod', ['sass:prod', 'js:prod'])