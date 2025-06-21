export const fonts = () => {
  return app.gulp.src(app.path.src.fonts, { buffer: false, allowEmpty: true})
      .pipe(app.plugins.plumber({
          errorHandler: function(err) {
          console.error('Fonts Error:', err.message);
          this.emit('end');
          }
      }))

    .pipe(app.gulp.dest(app.path.build.fonts))
  .pipe(app.plugins.browsersync.stream());

};
