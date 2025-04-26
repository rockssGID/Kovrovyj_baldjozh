
import gulp from 'gulp';
//import webp from 'gulp-webp';
import svgmin from 'gulp-svgmin';
import sharp from 'sharp';
import through2 from 'through2';
import path from 'path';
import { promises as fs } from 'fs';

//---------------------------------------------------------------------
//-----MIN-----MIN-----MIN-----MIN-----MIN-----MIN-----MIN-----MIN-----
//---------------------------------------------------------------------

const sizes = [
  { width: 640, suffix: 'little' },
  { width: 1280, suffix: 'average' },
  { width: 1920, suffix: 'big' }
];

const specialSizes = [{ width: 600, suffix: 'swiper' }];
const formats = ['jpeg', 'webp', 'avif'];

// Отдельные настройки качества по формату
const formatOptions = {
  jpeg: { quality: 80, progressive: true },
  webp: { quality: 75 },
  avif: { quality: 60, effort: 8 }, // effort = уровень сжатия (0-9)
};

export const copyImagesMin = () => {
  return app.gulp.src([app.path.src.img.png, app.path.src.img.jpg], { encoding: false })
    .pipe(app.plugins.newer(app.path.buildMin.img))
    .pipe(through2.obj(async function (file, _, cb) {
      if (!file.isBuffer()) return cb();

      const ext = path.extname(file.path);
      const baseName = path.basename(file.path, ext);
      const dir = path.dirname(file.path);
      const relativePath = path.relative(path.resolve(app.path.srcFolder, 'img/images'), file.path); 
      const relativeDir = path.dirname(relativePath);

      const originalBuffer = file.contents;

      try {
        for (const { width, suffix } of sizes) {
          for (const format of formats) {
            const options = formatOptions[format] || {}; // Получаем настройки для формата

            const outputBuffer = await sharp(originalBuffer)
              .resize({ width })
              .toFormat(format, options)
              .toBuffer();

            const outputFileName = `${baseName}-${suffix}.${format}`;
            const outputPath = path.join(app.path.buildMin.img, relativeDir, outputFileName);

            await fs.mkdir(path.dirname(outputPath), { recursive: true });
            await fs.writeFile(outputPath, outputBuffer);
            console.log(`✅ Создано: ${outputFileName}`);
          }
        }

        for (const { width, suffix } of specialSizes) {
          for (const format of formats) {
            const options = formatOptions[format] || {};

            const outputBuffer = await sharp(originalBuffer)
              .resize({ width })
              .toFormat(format, options)
              .toBuffer();

            const outputFileName = `${baseName}-${suffix}.${format}`;
            const outputPath = path.join(app.path.buildMin.img, relativeDir, outputFileName);

            await fs.mkdir(path.dirname(outputPath), { recursive: true });
            await fs.writeFile(outputPath, outputBuffer);
            console.log(`✅ Создано: ${outputFileName}`);
          }
        }

        cb(); // пропускаем оригинал
      } catch (err) {
        console.error('❌ Ошибка при обработке изображения:', err);
        cb(err);
      }
    }));
};


export const copyGifMin = async () => {

  const imagemin = (await import("gulp-imagemin")).default;
  const gifsicle = (await import("imagemin-gifsicle")).default;

  return app.gulp.src(app.path.src.img.gif, { encoding: false })
  .pipe(app.plugins.newer(app.path.buildMin.img))
  .pipe(imagemin([
    gifsicle({
      optimizationLevel: 3, // от 1 до 3
      interlaced: true
    })
  ]))
  .pipe(app.gulp.dest(app.path.buildMin.img));
};


export const copyIconsMin = () => {
  return app.gulp.src(app.path.src.icon, { encoding: false })
    .pipe(app.plugins.newer(app.path.buildMin.icon))
    .pipe(app.gulp.dest(app.path.buildMin.icon));
};

export const copySvgMin = () => {
  return app.gulp.src(app.path.src.svg, { encoding: false })
    .pipe(app.plugins.newer(app.path.buildMin.svg))
    .pipe(svgmin())
    .pipe(app.gulp.dest(app.path.buildMin.svg));
};

export const imagesMin = gulp.series(copyImagesMin, copyGifMin,  copyIconsMin, copySvgMin);

//---------------------------------------------------------------------
//-----FULL-----FULL-----FULL-----FULL-----FULL-----FULL-----FULL------
//---------------------------------------------------------------------


const formatOptionsFull = {
  jpeg: { quality: 100, progressive: true },
  webp: { quality: 100 },
  avif: { quality: 100, effort: 8 }, // effort = уровень сжатия (0-9)
};

export const copyImagesFull = () => {
  return app.gulp.src([app.path.src.img.png, app.path.src.img.jpg], { encoding: false })
    .pipe(app.plugins.newer(app.path.buildFull.img))
    .pipe(through2.obj(async function (file, _, cb) {
      if (!file.isBuffer()) return cb();

      const ext = path.extname(file.path);
      const baseName = path.basename(file.path, ext);
      const dir = path.dirname(file.path);
      const relativePath = path.relative(path.resolve(app.path.srcFolder, 'img/images'), file.path); 
      const relativeDir = path.dirname(relativePath);

      const originalBuffer = file.contents;

      try {
        for (const { width, suffix } of sizes) {
          for (const format of formats) {
            const options = formatOptionsFull[format] || {}; // Получаем настройки для формата

            const outputBuffer = await sharp(originalBuffer)
              .resize({ width })
              .toFormat(format, options)
              .toBuffer();

            const outputFileName = `${baseName}-${suffix}.${format}`;
            const outputPath = path.join(app.path.buildFull.img, relativeDir, outputFileName);

            await fs.mkdir(path.dirname(outputPath), { recursive: true });
            await fs.writeFile(outputPath, outputBuffer);
            console.log(`✅ Создано: ${outputFileName}`);
          }
        }

        for (const { width, suffix } of specialSizes) {
          for (const format of formats) {
            const options = formatOptions[format] || {};

            const outputBuffer = await sharp(originalBuffer)
              .resize({ width })
              .toFormat(format, options)
              .toBuffer();

            const outputFileName = `${baseName}-${suffix}.${format}`;
            const outputPath = path.join(app.path.buildFull.img, relativeDir, outputFileName);

            await fs.mkdir(path.dirname(outputPath), { recursive: true });
            await fs.writeFile(outputPath, outputBuffer);
            console.log(`✅ Создано: ${outputFileName}`);
          }
        }


        cb(); // пропускаем оригинал
      } catch (err) {
        console.error('❌ Ошибка при обработке изображения:', err);
        cb(err);
      }
    }));
};

export const copyGifFull = () => {
  return app.gulp.src(app.path.src.img.gif, { encoding: false })
    .pipe(app.plugins.newer(app.path.buildFull.img))
    .pipe(app.gulp.dest(app.path.buildFull.img));
}

export const copyIconsFull = () => {
  return app.gulp.src(app.path.src.icon, { encoding: false})
    .pipe(app.plugins.newer(app.path.buildFull.icon))
    .pipe(app.gulp.dest(app.path.buildFull.icon));
};

export const copySvgFull = () => {
  return app.gulp.src(app.path.src.svg, { encoding: false})
    .pipe(app.plugins.newer(app.path.buildFull.svg))
    .pipe(app.gulp.dest(app.path.buildFull.svg));
};

export const imagesFull = gulp.series(copyImagesFull, copyGifFull,  copyIconsFull, copySvgFull);