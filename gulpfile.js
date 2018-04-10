var gulp = require('gulp')
, rename = require('gulp-rename')
, sourceMaps = require('gulp-sourcemaps')
, concat = require('gulp-concat')
, minifyHtml = require("gulp-minify-html")
, minifyCss = require("gulp-minify-css")
, uglify = require("gulp-uglify");

// task
gulp.task('minify-html', function () {
    gulp.src('src/index.html') // path to your files
    .pipe(minifyHtml())
    .pipe(gulp.dest('dist/'));
});

gulp.task('minify-css', function () {
    gulp.src(['src/css/font-styles.css','src/css/styles.css'])
    .pipe(sourceMaps.init())
    .pipe(concat('output.css'))
    .pipe(gulp.dest('compile/'))
    .pipe(minifyCss())
    .pipe(sourceMaps.write('/'))
    .pipe(gulp.dest('dist/'));
});

gulp.task('minify-js', function () {
    gulp.src(['src/js/jquery-3.3.1.min.js','src/js/functions.js'])
    .pipe(sourceMaps.init())
    .pipe(concat('output.js'))
    .pipe(gulp.dest('compile/'))
    .pipe(uglify())
    .pipe(sourceMaps.write('/'))
    .pipe(gulp.dest('dist/'));
});

gulp.task('default', ['minify-js', 'minify-css']);
