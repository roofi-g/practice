// exports.default = function (done) {
//   console.log("Hello from my first task");
//   done(); // 3
// }

const { src, dest, watch } = require('gulp');
const sass = require('gulp-sass')(require('sass'));

exports.default = async function () {
  console.log("Hello from my first task");
}
// npx gulp default
// default - имя задачи по умолчанию, можно не писать
// npx — это утилита, которая поставляется вместе с npm и позволяет выполнять из командной строки
// npm-пакеты, в нашем случае — gulp.

// копирует
// exports.copy = function () {
//   return src('src/*.scss')
//     .pipe(dest('output'));
// }

// преобразует
function build() { // 2
  return src('src/main.scss') // 3
    .pipe(sass()) // 4
    .pipe(dest('output'));
}
// чтобы код выполнялся постоянно
exports["build:watch"] = function () {
  return watch('src/*.scss', build);
}
// npx gulp build:watch

exports.build = build;
