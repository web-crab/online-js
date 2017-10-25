var
  gulp  = require('gulp'),
  babel = require('gulp-babel')

gulp.task('default', function() {
  return gulp
    .src('src/index.js')
    .pipe(babel({
      presets: ['env'],
      minified: true
    }))
    .pipe(gulp.dest('dist'))
})