const { series, parallel, src, dest } = require('gulp')
const  del = require('del')
const browserify = require('browserify')
const source  = require('vinyl-source-stream')
const tsify = require('tsify')
const uglify = require('gulp-uglify')
const rename = require('gulp-rename')

function clearDistFolder(cb) {
    return del(['dist']);
}

function copyHtml(cb) {
    return src('public/**/*')
        .pipe(dest('dist'))
}

function generateJs(cb) {
    return browserify({
        basedir: '.',
        entries: [
            'src/Generics.ts'
        ]
    })
        .plugin(tsify)
        .bundle()
        .pipe(source('app.js'))
        .pipe(dest('dist'))    
}

function generateJsProd() {
    return src('dist/app.js')
        .pipe(rename('app.min.js'))
        .pipe(uglify())
        .pipe(dest('dist'))
}

exports.default = series(
    clearDistFolder,
    parallel(
        generateJs,
        copyHtml
    ),
    generateJsProd
)