var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var htmlmin = require('gulp-htmlmin');
var imagemin = require('gulp-imagemin');
var connect = require('gulp-connect');

gulp.task('imagemin', function() {
  gulp.src('images/*')
	 .pipe(imagemin())
		.pipe(gulp.dest('dist/images'))
});


gulp.task('minify-css', function() {
  return gulp.src('styles/*.css')
    .pipe(cleanCSS())
      .pipe(gulp.dest('dist'))
        .pipe(connect.reload());
});

gulp.task('minify', function() {
  return gulp.src('./*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('dist'));
});

gulp.task('watch', function() {
  gulp.watch('styles/portfolio.css', ['minify-css'])
});

gulp.task('connect', function() {
  connect.server({
    root:'/Volumes/My Passport for Mac/WebFiles/DamansPortfolio',
    livereload: true
  });
});

gulp.task('default', ['minify-css', 'connect', 'watch']);
