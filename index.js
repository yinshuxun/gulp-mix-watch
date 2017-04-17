'strict'
const gulp = require('gulp')
const path = require('path')
const sass = require('gulp-sass');
const gutil = require('gulp-util')
const babel = require('gulp-babel')
const notify = require('gulp-notify')
const refresh = require('gulp-refresh')
const autoprefixer = require('gulp-autoprefixer')
const watchPath = require('gulp-watch-path')
const combiner = require('stream-combiner2')

const CURR_DIR = path.resolve('.')
// const JS_DIR = path.resolve('.')
// const CSS_DIR = path.resolve('.','../../css/')

const handleError = err => {
    const colors = gutil.colors
    console.log('\br')
    gutil.log('Error!!')
    gutil.log(colors.red(`fileName: ${err.fileName}`))
    gutil.log(colors.red(`lineNumber: ${err.lineNumber}`))
    gutil.log(colors.red(`message: ${err.message}`))
    gutil.log(colors.red(`plugin: ${err.plugin}`))
}

// gulp.task('es6', () => {
//     gulp.src(`${CURR_DIR}/es6/*.js`, `${CURR_DIR}/es6/**/*.js`)
//         .pipe(babel({
//             presets: ['es2015']
//         }))
//         .pipe(gulp.dest('dist'));
// })

//报错不会中断的watch任务
var default_watch = (opts) => {
    const {jsOutDir,cssOutDir} = opts
    gulp.watch(`**/*.es6`, (event) => {
        refresh.listen()
        const paths = watchPath(event, '/', `${jsOutDir}/`)

        const combined = combiner.obj([
            gulp.src(paths.srcPath),
            babel({
                presets: ['es2015']
            }),
            gulp.dest(paths.distDir),
            notify(`${path.basename(paths.srcPath)} transferred!!!`)
        ])
        combined.on('error', handleError)
    })

    gulp.watch(`${CURR_DIR}/scss/**/*.scss`, (event) => {
        const paths = watchPath(event, 'scss/', `${cssOutDir}/`)

        const combined = combiner.obj([
            gulp.src(paths.srcPath),
            // sass.sync(),
            autoprefixer(({
                browsers: ['> 0%'],
                cascade: false
            })),
            gulp.dest(paths.distDir),
            notify(`${path.basename(paths.srcPath)} transferred!!!`)
        ])
        combined.on('error', handleError)
    })
}


module.exports = default_watch
