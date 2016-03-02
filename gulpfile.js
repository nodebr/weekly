'use strict';

var del = require('del');
var gulp = require('gulp');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');

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

gulp.task('scripts', function() {
  return gulp.src([
      './bower_components/jquery/dist/jquery.min.js',
      './bower_components/uikit/js/uikit.min.js',
      './src/js/*.js',
    ])
    .pipe(concat('app.js'))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('dist', ['clean', 'copy', 'sass', 'scripts']);

gulp.task('default', ['dist']);
