'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var del = require('del');

gulp.task('sass', function () {
  return gulp.src('./src/scss/app.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('clean', function () {
  return del(['dist/*']);
});

gulp.task('copy', function () {
  return gulp
    .src('./src/index.html')
    .pipe(gulp.dest('./dist/'));
});

gulp.task('dist', ['clean', 'copy', 'sass']);

gulp.task('default', function() {
  // place code for your default task here
});
