import zip from 'gulp-zip';

export const zipBuild = () => {
  return app.gulp.src(app.path.buildFolder)
    .pipe(zip('build.zip'))
    .pipe(app.gulp.dest(app.path.zipFolder));
};