'use strict';

var gulp = require('gulp'),
    stream = require('event-stream'),
    size = require('gulp-size'),
    jshint = require('gulp-jshint'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    minifyCSS = require('gulp-minify-css'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    autoprefixer = require('gulp-autoprefixer'),
    browserSync = require('browser-sync').create();

gulp.task('lint', function() {
    return gulp.src(['js/*.js', '!js/main.js', '!js/*.min.js', '!js/*jquery*', '!js/*bootstrap*', ])
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});


gulp.task('styles', function() {
    return gulp.src(['styles/scss/*bootstrap*', 'styles/scss/*.scss'])


        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle : 'expanded'}).on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(concat('styles.min.css'))
        .pipe(minifyCSS({
            keepBreaks: true
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./styles/css'))
});

gulp.task('scripts', function() {
    var shapes = gulp.src(['js/shape.js'])
        .pipe(concat('shape.min.js'))
        .pipe(uglify())
        .pipe(size({
            title: 'size of custom js'
        }))
        .pipe(gulp.dest('js/min/'));
  var main = gulp.src(['js/main.js'])
    .pipe(concat('main.min.js'))
    .pipe(uglify())
    .pipe(size({
      title: 'size of custom js'
    }))
    .pipe(gulp.dest('js/min/'));
  var controller = gulp.src(['js/controller.js'])
    .pipe(concat('controller.min.js'))
    .pipe(uglify())
    .pipe(size({
      title: 'size of custom js'
    }))
    .pipe(gulp.dest('js/min/'));
    stream.concat(shapes, main, controller)
});


gulp.task('watch', function() {
    gulp.watch('./js/*.js', ['lint']);
    gulp.watch('./styles/scss/*.scss', ['styles']);
});

// gulp.task('clean', function() {
//     return gulp.src(['styles/css/styles.min.css', './js/all.min.js'], {read: false})
//         .pipe(clean());
// });





gulp.task('serve', function(){
    browserSync.init({
        server: './'
    });

    browserSync.watch('./**/*.*').on('change', browserSync.reload);
});

// gulp.task('default', ['clean'], function() {
//   gulp.start('styles', 'scripts');
// });