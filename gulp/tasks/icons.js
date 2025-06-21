import imagemin from 'gulp-imagemin';
export function  icons() {
    return app.gulp.src(app.path.src.icons, { encoding: false })
    .pipe(app.plugins.plumber({
        errorHandler: function(err) {
            console.error('Icons Error:', err.message);
            this.emit('end');
        }
    }))
    .pipe(app.plugins.newer(app.path.build.icons))
        .pipe(imagemin({progressive: true, svgoPlugin: [{ removeViewBox: false}], interlaced: true, optimizationLevel: 2}))
        .pipe(app.gulp.dest(app.path.build.icons))
        .pipe(app.plugins.browsersync.stream());
};