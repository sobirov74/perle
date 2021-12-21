global.$ = {
    /* require() - метод подключающий плагины */
    gulp: require('gulp'),
    /* gulp-load-plugins - запускает все плагины связанные с gulp */
    gp: require('gulp-load-plugins')(),
    /* browser-sync - проверяет все файлы и запускает их */
    bs: require('browser-sync').create(),

    path: {/* path - подключаем пути работы gulp */
        tasks: require('./gulp/config/tasks'), /* отдает массив */
        serverDir: './app/build', /* serverDir - папка конечного результата. Будет создаваться самостоятельно */

        src: {/* даем понимание что откуда подключать */
            html: './app/src/*.{html,pug,jade}',
            style: './app/src/styles/*.*',
            js: './app/src/script/*.*',
            img: './app/src/images/**/*.{png,jpg,gif,svg}',
            fonts: './app/src/fonts/**/**/*.*'
        },

        build: { /* Построенная версия */
            html: './app/build/',
            style: './app/build/styles/',
            js: './app/build/script/',
            img: './app/build/images/',
            fonts: './app/build/fonts/'
        },

        watch: { /* говорим за какими файлами нужно следить */
            html: ['./app/src/*.{html,pug,jade}', './app/src/view/**/*.{html,pug,jade}'],
            style: './app/src/styles/**/*.*',
            js: './app/src/script/**/*.*',
            img: './app/src/images/**/*.{png,jpg,gif,svg}',
            fonts: './app/src/fonts/**/*.*'
        }
    }
}

$.path.tasks.forEach(taskPath => require(taskPath)()); /* Перебираем массив и запускаем все плагины */

$.gulp.task('default', $.gulp.series($.gulp.parallel('html', 'style', 'js', 'img', 'fonts', 'watch', 'serve')))
/* ставим задачи галпу по умолчанию */

$.gulp.task('build', $.gulp.series($.gulp.parallel('html', 'style', 'js', 'fonts', 'img')))
/* Ставим задачу для конечной версии */