import browsersync from "browser-sync";
import plumber from 'gulp-plumber';
import rename from 'gulp-rename';
import newer from "gulp-newer";


export const plugins = {
    browsersync: browsersync,
    plumber: plumber,
    rename: rename,
    newer: newer
}