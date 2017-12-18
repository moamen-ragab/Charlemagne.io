'use strict';

var gulp = require('gulp');
var pug = require('gulp-pug');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var cssnano = require('gulp-cssnano');
var rename = require('gulp-rename');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('watch', function() {
    gulp.watch([
        './src/sass/*.scss',
        './src/sass/**/*.scss',
        './src/views/*.pug',
        './src/views/**/*.pug'
    ], ['build:sass', 'build:pug']);
});

gulp.task('build:sass', function() {
    return gulp
        .src('./src/sass/styles.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(cssnano())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist'))
});

gulp.task('build:pug', function() {
    return gulp
        .src('src/views/*.pug')
        .pipe(pug())
        .pipe(gulp.dest('dist'));
});

gulp.task('build', ['build:sass', 'build:pug']);


gulp.task('default', ['watch']);