var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

//Run python -m SimpleHTTPServer

gulp.task('shell:python:server', $.shell.task(['pushd demo/; python -m SimpleHTTPServer; popd']));