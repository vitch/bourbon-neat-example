var gulp  = require('gulp'),
  sass  = require('gulp-sass'),
  connect = require('gulp-connect');

gulp.task('sass',function(){
  gulp.src('src/sass/site.scss')
    .pipe(sass({
      errLogToConsole: true,
      includePaths: require('node-bourbon').includePaths
    }))
    .pipe(gulp.dest('out/css/'));
});

gulp.task('connect', function() {
  connect.server({
    root: 'out'
  });
});

// Rerun the task when a file changes
gulp.task('watch', function() {
  gulp.watch('src/sass/**/*.scss', ['sass']);
});


gulp.task('default',['sass', 'connect', 'watch']);

