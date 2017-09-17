var gulp = require('gulp');
var watch = require('gulp-watch');
var sass = require('gulp-sass');

var source = 'app/app.scss';
var dest = 'app/';


gulp.task('styles', function() {
	gulp.src(source)
		.pipe(sass({outputStyle: 'compressed'}))
		.pipe(gulp.dest(dest));
});

gulp.task('default', function() {
	gulp.watch(source, ['styles']);
});
