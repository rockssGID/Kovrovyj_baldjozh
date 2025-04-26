// sprite.js
import gulp from 'gulp';
import rename from 'gulp-rename';
import path from 'path';
import through2 from 'through2';
import fs from 'fs';
import template from 'gulp-template';
import gulpSvgSprite from 'gulp-svg-sprite';

const svgSprite = () => {
  return gulp.src(app.path.sprite.input)
    .pipe(
      through2.obj(function (file, _, cb) {
        if (file.isBuffer()) {
          const fileName = path.basename(file.path, '.svg');
          let content = file.contents.toString();

          // id, class, ссылки
          content = content
            .replace(/id="([^"]+)"/g, `id="$1--${fileName}"`)
            .replace(/class="([^"]+)"/g, (match, classes) => {
              const updated = classes
                .split(' ')
                .map(cls => `${cls}--${fileName}`)
                .join(' ');
              return `class="${updated}"`;
            })
            .replace(/xlink:href="#([^"]+)"/g, `xlink:href="#$1--${fileName}"`)
            .replace(/url\(#([^"]+)\)/g, `url(#$1--${fileName})`);

          // Только внутри <style> заменяем .class селекторы
          content = content.replace(/<style[^>]*>([\s\S]*?)<\/style>/g, (match, css) => {
            const updatedCss = css.replace(/\.([a-zA-Z0-9_-]+)\b/g, `.$1--${fileName}`);
            return `<style>${updatedCss}</style>`;
          });

          file.contents = Buffer.from(content);
        }
        cb(null, file);
      })
    )
    .pipe(gulpSvgSprite({
      mode: {
        symbol: {
          dest: '.',
          sprite: `sprite.svg`,
          example: true
        }
      }
    }))
    .pipe(gulp.dest(app.path.sprite.output));
};


export const svgToSprite = gulp.series(svgSprite);
