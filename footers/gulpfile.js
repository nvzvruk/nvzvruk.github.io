var gulp         = require('gulp'),
     postcss      = require('gulp-postcss'),
     sass         = require('gulp-sass'),
     autoprefixer = require('autoprefixer'),
     browser      = require('browser-sync'),
     sourcemaps   = require('gulp-sourcemaps');
 	
 gulp.task('build:sass', function () {
   return gulp.src('scss/**/*.scss')
         .pipe(sourcemaps.init())
         .pipe(sass().on('error', sass.logError))
         .pipe(postcss([ autoprefixer({ browsers: ['last 2 versions'] }) ]))
         .pipe(sourcemaps.write('.'))
         .pipe(gulp.dest('./css'))
         .pipe(browser.stream({match: '**/*.css'}));
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