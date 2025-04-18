const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');

gulp.task('sass-compile', () => {
    return gulp.src('./scss/main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./css/'));
});

gulp.task('watch', () => {
    gulp.watch('./scss/**/*.scss', gulp.series('sass-compile'));
});

gulp.task('default', gulp.series('sass-compile', 'watch'));
