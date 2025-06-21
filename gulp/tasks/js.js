import webpack from "webpack-stream";

 export  function  js() {
    return app.gulp.src(app.path.src.js)
        .pipe(app.plugins.plumber({
            errorHandler: function(err) {
            console.error('Img Error:', err.message);
            this.emit('end');
            }
        }))

        
        .pipe(webpack())

        .pipe(app.gulp.dest(app.path.build.js))
        .pipe(app.plugins.browsersync.stream());
};
