var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var imagemin = require('gulp-imagemin');
var sass = require('gulp-sass');

gulp.task('default', ['gulp-imagemin', 'sass:watch']);

gulp.task('sass:watch', function() {
    gulp.watch('src/css/scss/*.scss', ['gulp-sass']);
});

gulp.task('gulp-sass', function () {
    gulp.src('src/css/scss/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(autoprefixer({
          browsers: ['> 1%', 'IE 7'],
          cascade: false
      }))
      .pipe(gulp.dest('src/css/'));
});

gulp.task('gulp-imagemin', function () {
    gulp.src('src/img/unde_gulp/*')
      .pipe(imagemin())
      .pipe(gulp.dest('src/img/'));
});
