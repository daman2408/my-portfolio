var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var htmlmin = require('gulp-htmlmin');
var imagemin = require('gulp-imagemin');

gulp.task('imagemin', function() {
  gulp.src('images/*')
	 .pipe(imagemin())
		.pipe(gulp.dest('dist/images'))
});


gulp.task('minify-css', function() {
  return gulp.src('app/css/*.css')
    .pipe(cleanCSS())
      .pipe(gulp.dest('dist'));
});

gulp.task('minify', function() {
  return gulp.src('app/html/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('dist'))
});

gulp.task('tinypng', function () {
    gulp.src('images/**/*.{png,jpg,jpeg}')
        .pipe(tinypng({
            key: 'API_KEY',
            sigFile: 'images/.tinypng-sigs',
            log: true
        }))
        .pipe(gulp.dest('dist/images'));
});
