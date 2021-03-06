var gulp         = require('gulp'),
    postcss      = require('gulp-postcss'),
    sass         = require('gulp-sass'),
    autoprefixer = require('autoprefixer'),
    browser      = require('browser-sync'),
    sourcemaps   = require('gulp-sourcemaps'),
    iconfont     = require("gulp-iconfont"),
    consolidate  = require("gulp-consolidate");

 	
 gulp.task('build:sass', function () {
   return gulp.src('scss/**/*.scss')
         .pipe(sourcemaps.init())
         .pipe(sass().on('error', sass.logError))
         .pipe(postcss([ autoprefixer({ browsers: ['last 2 versions'] }) ]))
         .pipe(sourcemaps.write('.'))
         .pipe(gulp.dest('./css'))
         .pipe(browser.stream({match: '**/*.css'}));
 });

gulp.task("build:icons", function() {
   return gulp.src(["./assets/icons/*.svg"])//path to svg icons
     .pipe(iconfont({
       fontName: "myicons",
       formats: ["ttf", "eot", "woff", "svg"],
       centerHorizontally: true,
       fixedWidth: true,
       normalize: true
     }))
     .on("glyphs", function (glyphs) {

       gulp.src("./assets/icons/util/*.scss") // Template for scss files
           .pipe(consolidate("lodash", {
               glyphs: glyphs,
               fontName: "myicons",
               fontPath: "../dist/fonts/"
           }))
           .pipe(gulp.dest("./assets/scss/icons/"));//generated scss files with classes
     })
     .pipe(gulp.dest("dist/fonts/"));//icon font destination
});


 // Starts a BrowerSync instance
 gulp.task('serve', ['build:sass'], function(){
     browser.init({
         server: {
             baseDir: "./"
         }
     });
 });

 // Runs all of the above tasks and then waits for files to change
 gulp.task('default', ['serve'], function() {
     gulp.watch(['scss/**/*.scss'], ['build:sass']);  
     gulp.watch('./**/*.html').on('change', browser.reload);
 });