import fs from "fs";
import webpack from "webpack-stream";

export const scriptFull = () => {
  return app.gulp.src(app.path.src.js, { sourcemaps: true })
  .pipe(app.plugins.plumber({
    errorHandler: function (err) {
      console.error(err.message);
      this.emit("end");
    }
  }))
  .pipe(webpack({
    mode: 'development',
    output: {
      filename: 'app.js',
    }
  }))

  .pipe(app.gulp.dest(app.path.buildFull.js));
};

export const scriptMin = () => {
  return app.gulp.src(app.path.src.js, { sourcemaps: true })
    .pipe(app.plugins.plumber({
      errorHandler: function (err) {
        console.error(err.message);
        this.emit("end");
      }
    }))
    .pipe(webpack({
      mode: 'production',
      output: {
        filename: 'app.min.js',
      }
    }))

    .pipe(app.gulp.dest(app.path.buildMin.js));
}