var gulp = require('gulp');
var watch = require('gulp-watch');
var sass = require('gulp-sass');

var sourceDir = 'assets/scss/**/*.scss';
var source = 'assets/scss/styles.scss';
var dest = './assets/css/';


gulp.task('styles', function() {
	gulp.src(source)
		.pipe(sass({outputStyle: 'compressed'}))
		.pipe(gulp.dest(dest));
});

gulp.task('default', function() {
	gulp.watch(sourceDir, ['styles']);
});

