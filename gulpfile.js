// Main module;
import gulp from "gulp";

// Import main
import { path } from "./gulp/config/path.js";
import { plugins } from "./gulp/config/plugins.js";


global.app =  {
	path: path,
	gulp: gulp,
	plugins: plugins
}

// Import tasks
import { reset } from "./gulp/tasks/reset.js";
import { scss } from "./gulp/tasks/scss.js";
import { html } from './gulp/tasks/html.js';
import { img } from "./gulp/tasks/img.js";
import { icons } from "./gulp/tasks/icons.js";
import { fonts } from "./gulp/tasks/fonts.js";
import { server } from './gulp/tasks/server.js';
import { js } from "./gulp/tasks/js.js";

// Watcher
const watcher = () => {
	gulp.watch(path.watch.fonts, fonts);
	gulp.watch(path.watch.html, html);
	gulp.watch(path.watch.scss, scss);
	gulp.watch(path.watch.img, img);
	gulp.watch(path.watch.icons, icons);
	gulp.watch(path.watch.js, js); 
}

// Run multiple tasks
const rebuild = gulp.parallel(html, scss, js);
const images = gulp.parallel(img, icons);
const dev = gulp.series(reset, rebuild, images,fonts,  gulp.parallel(watcher, server));



// Run tasks default
gulp.task('default', dev);