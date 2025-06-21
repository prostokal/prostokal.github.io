import dartSass from 'sass';
import gulpSass from 'gulp-sass';

const sass = gulpSass(dartSass);

export function scss() {
    return app.gulp.src(app.path.src.scss, {sourcemaps: true})
        .pipe(app.plugins.plumber({
            errorHandler: function(err) {
            console.error('Scss Error:', err.message);
            this.emit('end');
            }
        }))
        
        .pipe(sass.sync({style: 'compressed'}).on('error', sass.logError))
        .pipe(app.plugins.rename({
            extname: '.min.css'
        }))
        .pipe(app.gulp.dest(app.path.build.css))
        .pipe(app.plugins.browsersync.stream());
};
