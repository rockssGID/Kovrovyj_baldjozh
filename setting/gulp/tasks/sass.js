import dartSass from "sass";
import gulpSass from "gulp-sass";
import webpcss from "gulp-webpcss";
import autoprefixer from "gulp-autoprefixer";
import mediaGroup from "gulp-group-css-media-queries";
import cleanCss from "gulp-clean-css";



const sass = gulpSass(dartSass);

export const sassFull = () => {
  return app.gulp.src(app.path.src.css)
    .pipe(app.plugins.plumber({
      errorHandler: function (err) {
        console.error(err.message);
        this.emit("end");
      }
    }))
    .pipe(sass())
    .pipe(app.plugins.replace(/@img\//g, "../img/"))
    .pipe(webpcss({
        webpClass: ".webp",
        noWebpClass: ".no-webp"
    }))
    .pipe(autoprefixer({
      grid: true,
      overrideBrowderslist: ["last 3 versions"],
      cascade:true
    }))
    .pipe(mediaGroup())

    .pipe(app.gulp.dest(app.path.buildFull.css));
};


export const sassMin = () => {
  return app.gulp.src(app.path.src.css)
    .pipe(app.plugins.plumber({
      errorHandler: function (err) {
        console.error(err.message);
        this.emit("end");
      }
    }))
    .pipe(sass())
    .pipe(app.plugins.replace(/@img\//g, "../img/"))
    .pipe(webpcss({
      webpClass: ".webp",
      noWebpClass: ".no-webp"
    }))
    .pipe(autoprefixer({
      grid: true,
      overrideBrowderslist: ["last 3 versions"],
      cascade:true
    }))
    .pipe(mediaGroup())

    .pipe(cleanCss())
    .pipe(app.plugins.rename({suffix: ".min"}))
    .pipe(app.gulp.dest(app.path.buildMin.css));
};