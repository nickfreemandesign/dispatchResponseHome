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
    gulp.src(['src/css/font-styles.css','src/css/onepage-scroll.css','src/css/styles.css'])
    .pipe(sourceMaps.init())
    .pipe(concat('output.css'))
    .pipe(gulp.dest('dist/'))
    .pipe(minifyCss())
    .pipe(sourceMaps.write('/'))
    .pipe(gulp.dest('dist/'));
});

gulp.task('minify-js', function () {
    gulp.src(['src/js/jquery-3.3.1.min.js','src/js/jquery.onepage-scroll.min.js','src/js/functions.js'])
    .pipe(sourceMaps.init())
    .pipe(concat('output.js'))
    .pipe(gulp.dest('dist/'))
    .pipe(uglify())
    .pipe(sourceMaps.write('/'))
    .pipe(gulp.dest('dist/'));
});

gulp.task('default', ['minify-js', 'minify-css', 'minify-html']);

// var gulp = require('gulp'),
//     gp_concat = require('gulp-concat'),
//     gp_rename = require('gulp-rename'),
//     gp_uglify = require('gulp-uglify'),
//     gp_sourcemaps = require('gulp-sourcemaps');
//
// gulp.task('js-fef', function(){
//     return gulp.src(['file1.js', 'file2.js', 'file3.js'])
//         .pipe(gp_sourcemaps.init())
//         .pipe(gp_concat('concat.js'))
//         .pipe(gulp.dest('dist'))
//         .pipe(gp_rename('uglify.js'))
//         .pipe(gp_uglify())
//         .pipe(gp_sourcemaps.write('./'))
//         .pipe(gulp.dest('dist'));
// });
//
// gulp.task('default', ['js-fef'], function(){});
