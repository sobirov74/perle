module.exports = () => {
    $.gulp.task('serve', () => {
        $.bs.init({ /* запускаем BS */
            server: {
                baseDir: $.path.serverDir  /* Папка конечного результата */
            }
        })
    })
}