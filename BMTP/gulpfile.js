var  gulp         = require('gulp'),
     postcss      = require('gulp-postcss'),
     sass         = require('gulp-sass'),
     autoprefixer = require('autoprefixer'),
     browser      = require('browser-sync'),
     sourcemaps   = require('gulp-sourcemaps'),
     iconfont     = require("gulp-iconfont"),
     consolidate  = require("gulp-consolidate");
 	
 gulp.task('build:sass', function () {
   return gulp.src('src/scss/**/*.scss')
         .pipe(sourcemaps.init())
         .pipe(sass().on('error', sass.logError))
         .pipe(postcss([ autoprefixer({ browsers: ['last 2 versions'] }) ]))
         .pipe(sourcemaps.write('.'))
         .pipe(gulp.dest('./src/css'))
         .pipe(browser.stream({match: '**/*.css'}));
 });

gulp.task("build:icons", function() {
   return gulp.src(["./src/img/icons/*.svg"])//path to svg icons
   .pipe(iconfont({
     fontName: "icon-font",
     formats: ["ttf", "eot", "woff2", "woff", "svg"],
     centerHorizontally: true,
     fixedWidth: true,
     normalize: true
   }))
   .on("glyphs", function (glyphs) {

       gulp.src("./src/img/icons/util/*.scss") // Template for scss files
       .pipe(consolidate("lodash", {
         glyphs: glyphs,
         fontName: "icon-font",
         fontPath: "../font/icon/"
       }))
           .pipe(gulp.dest("./src/scss/icons/"));//generated scss files with classes
         })
     .pipe(gulp.dest("./src/font/icon/"));//icon font destination
   });

 // Starts a BrowerSync instance
 gulp.task('serve', ['build:sass'], function(){
     browser.init({
         server: {
             baseDir: "./src/"
         }
     });
 });

 // Runs all of the above tasks and then waits for files to change
 gulp.task('default', ['serve'], function() {
     gulp.watch(['src/scss/**/*.scss'], ['build:sass']);  
     gulp.watch('./src/**/*.html').on('change', browser.reload);
 });