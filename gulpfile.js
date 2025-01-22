const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const plumber = require('gulp-plumber');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const sourcemaps = require('gulp-sourcemaps');
const terser = require('gulp-terser');
const concat = require('gulp-concat');
const fs = require('fs');
const browserSync = require('browser-sync').create();
const webp = require('gulp-webp');

// Inicializar Browser Sync
function browserSyncInit(cb) {
    browserSync.init({
        server: {
            baseDir: ["./src/pages", "./src", "./"],
            routes: {
                "/dist": "dist",
                "/node_modules": "node_modules"
            }
        },
        port: 3000,
        notify: false,
        callbacks: {
            ready: function (err, bs) {
                bs.addMiddleware("*", function (req, res) {
                    res.writeHead(302, {
                        location: "404.html"
                    });
                    res.end();
                });
            }
        }
    });
    cb();
}

// Crear directorios si no existen
function createDirs(cb) {
    // Crear estructura de carpetas
    ['src/js', 'dist/css', 'dist/js', 'dist/img'].forEach(dir => {
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
        }
    });
    cb();
}

// Compilar SCSS a CSS
function css() {
    return gulp
        .src('src/scss/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(plumber({
            errorHandler: function (err) {
                console.log(err.message);
                this.emit('end');
            }
        }))
        .pipe(sass())
        .pipe(postcss([autoprefixer(), cssnano()]))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist/css'))
        .pipe(browserSync.stream());
}

// Compilar JavaScript
function javascript() {
    return gulp
        .src([
            'src/js/utils/**/*.js',  // Primero todos los archivos de utilidades
            'src/js/main.js'         // Después el archivo principal
        ])
        .pipe(sourcemaps.init())
        .pipe(plumber({
            errorHandler: function (err) {
                console.log(err.message);
                this.emit('end');
            }
        }))
        .pipe(concat('main.min.js'))
        .pipe(terser())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist/js'))
        .pipe(browserSync.stream());
}

// Convertir imágenes a WebP
function versionWebp() {
    return gulp
        .src('src/assets/images/**/*.{png,jpg,jpeg}')
        .pipe(webp())
        .pipe(gulp.dest('dist/img'))
        .pipe(browserSync.stream());
}

// Crear archivo JavaScript inicial si no existe
function createInitialJS(cb) {
    const initialJSPath = 'src/js/main.js';
    if (!fs.existsSync(initialJSPath)) {
        fs.writeFileSync(initialJSPath, '// Archivo JavaScript principal');
    }
    cb();
}

// Vigilar cambios en archivos
function watchFiles() {
    gulp.watch('src/scss/**/*.scss', css).on('error', function (err) {
        console.log(err.message);
        this.emit('end');
    });

    gulp.watch('src/js/**/*.js', javascript).on('error', function (err) {
        console.log(err.message);
        this.emit('end');
    });

    gulp.watch('src/assets/images/**/*.{png,jpg,jpeg}', versionWebp).on('error', function (err) {
        console.log(err.message);
        this.emit('end');
    });

    gulp.watch('src/pages/**/*.html').on('change', browserSync.reload).on('error', function (err) {
        console.log(err.message);
        this.emit('end');
    });
}

// Vigilar cambios en archivos (sin browserSync)
function watchOnly() {
    gulp.watch('src/scss/**/*.scss', css);
    gulp.watch('src/js/**/*.js', javascript);
    gulp.watch('src/assets/images/**/*.{png,jpg,jpeg}', versionWebp);
}

// Tareas
exports.css = css;
exports.js = javascript;
exports.webp = versionWebp;
exports.watch = watchOnly;
exports.build = gulp.parallel(css, javascript, versionWebp);
exports.default = gulp.series(
    createDirs,
    createInitialJS,
    gulp.parallel(css, javascript, versionWebp),
    browserSyncInit,
    watchFiles
); 