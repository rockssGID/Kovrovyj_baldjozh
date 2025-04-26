import newer from 'gulp-newer';
import replace from 'gulp-replace';
import plumber from 'gulp-plumber';
import rename from 'gulp-rename';


export const plugins = {
  plumber: plumber,
  rename: rename,
  newer: newer,
  replace: replace,
};