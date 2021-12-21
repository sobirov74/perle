let fs = require('fs'), /* fs - fileSystem встроенный модуль в nodejs */
    path = './gulp/tasks',
    arrPathFills = fs.readdirSync(path).map(item => `${path}/${item}`)

    /* readdirSync() - метод объекта fs который отдает названия всех файлов внутри папки */


module.exports = arrPathFills;