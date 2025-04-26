
//----------------------------------------------------------------------
//-----FULL-----FULL-----FULL-----FULL-----FULL-----FULL-----FULL-------
//----------------------------------------------------------------------

export const copyFilesFull = () => {
  return app.gulp.src(app.path.src.files)
    .pipe(app.plugins.newer(app.path.buildFull.files))
    .pipe(app.gulp.dest(app.path.buildFull.files));
};

//----------------------------------------------------------------------
//-----MIN-----MIN-----MIN-----MIN-----MIN-----MIN-----MIN-----MIN------
//----------------------------------------------------------------------

export const copyFilesMin = () => {
  return app.gulp.src(app.path.src.files)
    .pipe(app.plugins.newer(app.path.buildMin.files))
    .pipe(app.gulp.dest(app.path.buildMin.files));
};
