import pug from "gulp-pug";
import fs from "fs";
import versionNumber from "gulp-version-number";
import htmlMin from "gulp-htmlmin";
import * as cheerio from "cheerio";
import through2 from 'through2';
import data from 'gulp-data';
import path from 'path';



export const pugToHtmlFull = () => {
  return app.gulp.src(app.path.src.html)
  .pipe(app.plugins.replace(/@img\//g, 'img/'))
  .pipe(app.plugins.replace(/@style/g, 'style.css'))
  .pipe(app.plugins.replace(/@app/g, 'app.js'))
  .pipe(app.plugins.plumber({
    errorHandler: function (err) {
      console.error(err.message);
      this.emit("end");
    }
  }))
  .pipe(data((file) => {
    const dataFolder = app.path.src.data;
    const data = {};
  
    try {
      fs.readdirSync(dataFolder).forEach(filename => {
        if (filename.endsWith('.json')) {
          const name = path.basename(filename, '.json');
          const filePath = path.join(dataFolder, filename);
          const content = fs.readFileSync(filePath, 'utf-8');
          if (content.trim()) {
            data[name] = JSON.parse(content);
            console.log(`✔ Успешно считан файл: ${filename}`);
          } else {
            console.warn(`⚠ Пустой файл: ${filename}, пропущен.`);
          }
        }
      });
    } catch (err) {
      console.error('❌ Ошибка при чтении данных:', err);
    }
  
    return data;
  }))
  
  .pipe(pug({ pretty: true }))
  .pipe(versionNumber({
    value: "%DT%",
    append: {
      kay: "_v",
      cover: 0,
      to: ["css", "js"],
    },
    output: {
      file: "setting/version.json",
    },
  }))
  .pipe(through2.obj(function(file, _, cb) {
    if (file.isBuffer()) {
      const content = file.contents.toString();
      const $ = cheerio.load(content);
  
      $('img').each((_, img) => {
        const src = $(img).attr('src');
        const alt = $(img).attr('alt') || '';
  
        if (!src) return;
  
        const base = src.replace(/\-(big|swiper)\.(jpe?g|png)$/, '');
        const ext = src.endsWith('.png') ? 'png' : 'jpg';
  
        if (src.includes('-big')) {

          const sizes = '(max-width: 768px) 640px, (max-width: 1280px) 1000px, 1200px';
    
          const picture = `
            <picture>
              <source srcset="${base}-little.avif 640w, ${base}-average.avif 1280w, ${base}-big.avif 1920w" sizes="${sizes}" type="image/avif">
              <source srcset="${base}-little.webp 640w, ${base}-average.webp 1280w, ${base}-big.webp 1920w" sizes="${sizes}" type="image/webp">
              <img src="${base}-big.${ext}" alt="${alt}" loading="lazy" decoding="async">
            </picture>
          `.replace(/\s{2,}/g, ' ').trim();
    
          $(img).replaceWith(picture);
        }

        else if (src.includes('-swiper')) {
          const picture = `
          <picture>
            <source srcset="${base}-swiper.avif" type="image/avif">
            <source srcset="${base}-swiper.webp" type="image/webp">
            <img src="${base}-swiper.${ext}" alt="${alt}" loading="lazy" decoding="async">
          </picture>
        `.replace(/\s{2,}/g, ' ').trim();

        $(img).replaceWith(picture);
        }

      });
  
      file.contents = Buffer.from($.html());
    }
  
    cb(null, file);
  }))
  .pipe(app.gulp.dest(app.path.buildFull.html));
};

export const pugToHtmlMin = () => {
  return app.gulp.src(app.path.src.html)
  .pipe(app.plugins.replace(/@img\//g, 'img/'))
  .pipe(app.plugins.replace(/@style/g, 'style.min.css'))
  .pipe(app.plugins.replace(/@app/g, 'app.min.js'))
  .pipe(data(file => {
    const dataFolder = 'src/pug/data';
    const data = {};
  
    fs.readdirSync(dataFolder).forEach(filename => {
      if (filename.endsWith('.js')) {
        const name = path.basename(filename, '.js'); // имя файла без .js
        const filePath = path.join(dataFolder, filename);
        data[name] = JSON.parse(fs.readFileSync(filePath));
      }
    });
  
    return data;
  }))
  .pipe(data((file) => {
    const dataFolder = app.path.src.data;
    const data = {};
  
    try {
      fs.readdirSync(dataFolder).forEach(filename => {
        if (filename.endsWith('.json')) {
          const name = path.basename(filename, '.json');
          const filePath = path.join(dataFolder, filename);
          const content = fs.readFileSync(filePath, 'utf-8');
          if (content.trim()) {
            data[name] = JSON.parse(content);
            console.log(`✔ Успешно считан файл: ${filename}`);
          } else {
            console.warn(`⚠ Пустой файл: ${filename}, пропущен.`);
          }
        }
      });
    } catch (err) {
      console.error('❌ Ошибка при чтении данных:', err);
    }
  
    return data;
  }))
  .pipe(pug({ pretty: true }))
  .pipe(through2.obj(function(file, _, cb) {
    if (file.isBuffer()) {
      const content = file.contents.toString();
      const $ = cheerio.load(content);
  
      $('img').each((_, img) => {
        const src = $(img).attr('src');
        const alt = $(img).attr('alt') || '';
  
        if (!src) return;
  
        const base = src.replace(/\-(big|swiper)\.(jpe?g|png)$/, '');
        const ext = src.endsWith('.png') ? 'png' : 'jpg';
  
        if (src.includes('-big')) {

          const sizes = '(max-width: 768px) 640px, (max-width: 1280px) 1000px, 1200px';
    
          const picture = `
            <picture>
              <source srcset="${base}-little.avif 640w, ${base}-average.avif 1280w, ${base}-big.avif 1920w" sizes="${sizes}" type="image/avif">
              <source srcset="${base}-little.webp 640w, ${base}-average.webp 1280w, ${base}-big.webp 1920w" sizes="${sizes}" type="image/webp">
              <img src="${base}-big.${ext}" alt="${alt}" loading="lazy" decoding="async">
            </picture>
          `.replace(/\s{2,}/g, ' ').trim();
    
          $(img).replaceWith(picture);
        }

        else if (src.includes('-swiper')) {
          const picture = `
          <picture>
            <source srcset="${base}-swiper.avif" type="image/avif">
            <source srcset="${base}-swiper.webp" type="image/webp">
            <img src="${base}-swiper.${ext}" alt="${alt}" loading="lazy" decoding="async">
          </picture>
        `.replace(/\s{2,}/g, ' ').trim();

        $(img).replaceWith(picture);
        }

      });
  
      file.contents = Buffer.from($.html());
    }
  
    cb(null, file);
  }))
  .pipe(htmlMin({
    collapseWhitespace: true,
    removeComments: true    
  }))
  .pipe(app.gulp.dest(app.path.buildMin.html));
}