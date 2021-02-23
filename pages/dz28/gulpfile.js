const gulp = require('gulp');
let sass = require('gulp-sass'),
	clean = require('gulp-clean'),
	concatCss = require('gulp-concat-css');

gulp.task('scssToCss', () => { //конвертируем все файлы scss в css
    return gulp.src('src/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./src/css/'));
});

gulp.task('concatCss', () => { //конвертируем все файлы css в один
    return gulp.src('src/css/**/*.css')
	    .pipe(concatCss("style.min.css"))
	    .pipe(gulp.dest('./src/css/'));
});

gulp.task('clean', () => { //очищаем каждый раз папку css
    return gulp.src('src/css', {read: false})
        .pipe(clean());
});

gulp.task('endBuildCss', () => { //складывам файлы css в папку
    return gulp.src('src/css/style.min.css')
    	.pipe(gulp.dest('./dist/css/'))
});

gulp.task('endBuildHtml', () => { //складывам файлы html в папку
    return gulp.src('src/index.html')
    	.pipe(gulp.dest('./dist/'))
});

gulp.task('watch', () => { //gulp watch -отслеживаем изменения в scss файлах
    gulp.watch('src/scss/**/*.scss', (done) => { 
        gulp.series(['clean', 'scssToCss', 'concatCss'])(done);
    });
});

gulp.task('default', gulp.series(['clean','scssToCss','concatCss'])); //default-стандартная задача, запускается командой gulp, команды в серии выполняются одна за другой
gulp.task('build', gulp.series(['clean','scssToCss','concatCss','endBuildHtml','endBuildCss'])); //gulp build - для того, чтоб все файлы в конце сложидись по папкам