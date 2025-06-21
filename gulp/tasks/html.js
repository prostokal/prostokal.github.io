import htmlmin from 'gulp-htmlmin';
import gulpInclude from 'gulp-file-include';

export const html = () => {

    return app.gulp.src(app.path.src.html)
    .pipe(app.plugins.plumber({
        errorHandler: function(err) {
          console.error('Html Error:', err.message);
          this.emit('end');
        }
      }))
    .pipe(gulpInclude())
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(app.gulp.dest(app.path.build.html))
    
    .pipe(app.plugins.browsersync.stream());
}
  