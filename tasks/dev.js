var gulp = require('gulp');

//Dev

gulp.task('dev', ['shell:python:server', 'build:dev', 'styleguide', 'watch', 'browser:proxy']);