import imagemin from 'gulp-imagemin';

export  function  img() {
    return app.gulp.src(app.path.src.img, { encoding: false })
    .pipe(app.plugins.plumber({
        errorHandler: function(err) {
            console.error('Img Error:', err.message);
            this.emit('end');
        }
    }))
    .pipe(app.plugins.newer(app.path.build.img))
        .pipe(imagemin({progressive: true, svgoPlugin: [{ removeViewBox: false}], interlaced: true, optimizationLevel: 3}))
        .pipe(app.gulp.dest(app.path.build.img))
        .pipe(app.plugins.browsersync.stream());
};
