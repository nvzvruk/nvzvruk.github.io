var gulp         = require('gulp'),
    postcss      = require('gulp-postcss'),
    sass         = require('gulp-sass'),
    autoprefixer = require('autoprefixer'),
    browser      = require('browser-sync'),
    sourcemaps   = require('gulp-sourcemaps');

gulp.task('build:sass', function () {
    return gulp.src('src/scss/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss([ autoprefixer({ browsers: ['last 4 versions'] }) ]))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./dist/css'))
        .pipe(browser.stream({match: '**/*.css'}));
});

// Starts a BrowerSync instance
gulp.task('serve', ['build:sass'], function(){
    browser.init({
        server: {
            baseDir: "./dist"
        }
    });
});

// Runs all of the above tasks and then waits for files to change
gulp.task('default', ['serve'], function() {
    gulp.watch(['src/scss/**/*.scss'], ['build:sass']);
    gulp.watch('./dist/**/*.html', browser.reload);
});