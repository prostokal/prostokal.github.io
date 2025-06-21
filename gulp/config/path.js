import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = './dist';
const srcFolder = './src';



export const path = {
    build: {
        html: `${buildFolder}/`,
        css: `${buildFolder}/css/`,
        img: `${buildFolder}/img/`,
        icons: `${buildFolder}/icons/`,
        fonts: `${buildFolder}/fonts/`,
        js: `${buildFolder}/js/`,

    },
    src: {
        fonts: `${srcFolder}/fonts/**/*.{woff,woff2,ttf,otf}`,
        html: `${srcFolder}/*.html`,
        js: `${srcFolder}/js/**/*.js`,
        img: `${srcFolder}/img/**/*`, 
        icons: `${srcFolder}/icons/**/*`,
        scss: `${srcFolder}/scss/style.scss`

    },
    watch: {
        fonts: `${srcFolder}/fonts/**/*.{woff,woff2,ttf,otf}`,
        html: `${srcFolder}/**/*.html`,
        img: `${srcFolder}/img/**/*`,
        icons: `${srcFolder}/icons/**/*`,
        scss: `${srcFolder}/scss/**/*.scss`,
        js: `${srcFolder}/js/**/*.js`,
    },
    clean: buildFolder,
    buildFolder: buildFolder,
    srcFolder: srcFolder,
    rootFolder: rootFolder,
    ftp: ''
}
