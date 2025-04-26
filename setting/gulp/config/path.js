import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const srcFolder = `./src`;
const buildMinFolder =  `./build/min`;
const buildFullFolder = `./build/full`;
const buildFolder = `./build/**/*.*`;
const zipFolder = `./`;

export const path = {
  buildMin: {
    files: `${buildMinFolder}/files/`,
    fonts: `${buildMinFolder}/fonts/`,
    img: `${buildMinFolder}/img/images/`,
    icon: `${buildMinFolder}/img/icon/`,
    svg: `${buildMinFolder}/img/svg/`,
    js: `${buildMinFolder}/js/`,
    html: `${buildMinFolder}/`,
    css: `${buildMinFolder}/css/`,
  },
  buildFull: {
    files: `${buildFullFolder}/files/`,
    fonts: `${buildFullFolder}/fonts/`,
    img: `${buildFullFolder}/img/images/`,
    icon: `${buildFullFolder}/img/icon/`,
    svg: `${buildFullFolder}/img/svg/`,
    js: `${buildFullFolder}/js/`,
    html: `${buildFullFolder}/`,
    css: `${buildFullFolder}/css/`,
  },
  src: {
    files: `${srcFolder}/files/**/*.*`,
    fonts: `${srcFolder}/fonts/**/*.{woff,woff2}`,
    img: {
      jpg: `${srcFolder}/img/images/**/*.{jpg,jpeg}`,
      png: `${srcFolder}/img/images/**/*.png`,
      gif: `${srcFolder}/img/images/**/*.gif`,
      webp: `${srcFolder}/img/images/**/*.webp`,
      full: `${srcFolder}/img/images/**/*.{jpg,jpeg,png,gif,webp}`,
    },
    icon: `${srcFolder}/img/icon/*.*`,
    svg: `${srcFolder}/img/svg/**/*.svg`,
    js: `${srcFolder}/js/*.js`,
    html: `${srcFolder}/pug/*.pug`,
    css: `${srcFolder}/scss/*.scss`,
    data: `${srcFolder}/pug/data`
  },
  sprite: {
    input: `${srcFolder}/img/sprite/*.svg`,
    output: `${srcFolder}/img/svg`,
    svgToHtml: `${srcFolder}/img/svg/sprite.svg`,
    cleanSprite: `${srcFolder}/img/svg/sprite.{svg, html}`
  },
  watch: {
    files: `${srcFolder}/files/**/*.*`,
    fonts: `${srcFolder}/fonts/**/*.{woff,woff2}`,
    img: `${srcFolder}/img/images/**/*.{jpg,jpeg,png,gif,webp}`,
    icon: `${srcFolder}/img/icon/**/*.*`,
    svg: `${srcFolder}/img/svg/**/*.svg`,
    js: `${srcFolder}/js/**/*.js`,
    html: `${srcFolder}/pug/**/*.pug`,
    css: `${srcFolder}/scss/**/*.{scss,sass}`,
  },
  cleanFull: buildFullFolder,
  cleanMin: buildMinFolder,
  buildFolder: buildFolder,
  buildMinFolder: buildMinFolder,
  buildFullFolder: buildFullFolder,
  srcFolder: srcFolder,
  rootFolder: rootFolder,
  zipFolder: zipFolder
}