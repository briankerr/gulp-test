var gulp = require('gulp');

var uglify = require('gulp-uglify');

var concat = require('gulp-concat');



gulp.task('scripts', functions() {

return gulp.src('input.js')

.pipe(concat('input.min.js'))

.pipe(uglify())

.pipe(gulp.dest(''));

});
