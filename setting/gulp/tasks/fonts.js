import fs from "fs";
import fonter from "gulp-fonter";
import ttf2woff2 from "gulp-ttf2woff2";
import ttf2Woff from "gulp-ttf2woff";
import gulp from "gulp";

//---------------------------------------------------------------------
//-----FULL-----FULL-----FULL-----FULL-----FULL-----FULL-----FULL------
//---------------------------------------------------------------------

export const fontsFull = () => {
  return app.gulp.src(app.path.src.fonts, { encoding: false })

  .pipe(app.gulp.dest(app.path.buildFull.fonts));
};

//---------------------------------------------------------------------
//-----MIN-----MIN-----MIN-----MIN-----MIN-----MIN-----MIN-----MIN-----
//---------------------------------------------------------------------

export const fontsMin = () => {
  return app.gulp.src(app.path.src.fonts, { encoding: false })


  .pipe(app.gulp.dest(app.path.buildMin.fonts));
};

//---------------------------------------------------------------------
//-----CONVERTER-----CONVERTER-----CONVERTER-----CONVERTER-----CONVERTER
//---------------------------------------------------------------------

export const otfToTtf = () => {
  return app.gulp.src(`${app.path.srcFolder}/fonts/*.otf`, { encoding: false })
    .pipe(fonter({ format: ['ttf']}))
    .pipe(app.gulp.dest(`${app.path.srcFolder}/fonts/`));
};

export const ttfToWoff = () => {
  return app.gulp.src(`${app.path.srcFolder}/fonts/*.ttf`, { encoding: false })
    .pipe(ttf2Woff())
    .pipe(app.gulp.dest(`${app.path.srcFolder}/fonts/`));
};

export const ttfToWoff2 = () => {
  return app.gulp.src(`${app.path.srcFolder}/fonts/*.ttf`, { encoding: false })
    .pipe(ttf2woff2())
    .pipe(app.gulp.dest(`${app.path.srcFolder}/fonts/`));
};

//---------------------------------------------------------------------
//-----FONTS STYLE-----FONTS STYLE-----FONTS STYLE-----FONTS STYLE-----
//---------------------------------------------------------------------


export const fontsStyle = () => {
  const fontsFile = `${app.path.srcFolder}/scss/common/_fonts.scss`;

  fs.readdir(app.path.buildFull.fonts, function (err, fontsFiles) {
    if (fontsFiles) {
      if (!fs.existsSync(fontsFile)) {
        fs.writeFile(fontsFile, "", cb);
        let newFileOnly;
        for (var i=0; i < fontsFiles.length; i++) {
          let fontFileName = fontsFiles[i].split('.')[0];
          if (newFileOnly !== fontFileName) {
            let fontName = fontFileName.split('-')[0] ? fontFileName.split('-')[0] : fontFileName;
            let fontWeight = fontFileName.split("-")[1] ? fontFileName.split("-")[1] : fontFileName;

            if (fontWeight.toLowerCase() === "thin") {
              fontWeight = 100;
            } else if (fontWeight.toLowerCase() === "extralight") {
              fontWeight = 200;
            } else if (fontWeight.toLowerCase() === "light") {
              fontWeight = 300;
            } else if (fontWeight.toLowerCase() === "medium") {
              fontWeight = 500;
            } else if (fontWeight.toLowerCase() === "semibold") {
              fontWeight = 600;
            } else if (fontWeight.toLowerCase() === "bold") {
              fontWeight = 700;
            } else if (
              fontWeight.toLowerCase() === "extrabold" ||
              fontWeight.toLowerCase() === "heavy"
            ) {
              fontWeight = 800;
            } else if (fontWeight.toLowerCase() === "black") {
              fontWeight = 900;
            } else {
              fontWeight = 400;
            }

            fs.appendFile(
              fontsFile,
              `@font-face {
                font-family: ${fontName};
                font-display: swap;
                src: url("../fonts/${fontFileName}.woff2") format("woff2"),
                     url("../fonts/${fontFileName}.woff") format("woff");
                font-weight: ${fontWeight};
                font-style: normal;
              }\r\n`,
              cb
            );
            newFileOnly =fontFileName;
          }
        }
      } else {
        console.log( "Файл scss/fonts.scss уже существует. Для обновления файла нужно его удалить!")
      }
    }
  });

  return app.gulp.src(`${app.path.srcFolder}`);
  function cb() {}
};

//---------------------------------------------------------------------
//---------------------------------------------------------------------
//---------------------------------------------------------------------

export const fontsConverter = gulp.series(otfToTtf, ttfToWoff, ttfToWoff2, fontsStyle);