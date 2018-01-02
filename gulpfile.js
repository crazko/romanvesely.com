var crypto = require('crypto');
var del = require('del');
var fs = require('fs');

var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var gulpLoadPlugins = require('gulp-load-plugins');
var plugins = gulpLoadPlugins();

var paths = {
  dist: 'dist',
  styles: {
    src: 'src/assets/less',
    dist: 'dist/assets/css',
  },
  scripts: {
    src: [
      'node_modules/prismjs/prism.js',
      'node_modules/prismjs/components/prism-php.js',
      'src/assets/js/**/*.js',
    ],
    dist: 'dist/assets/js',
  },
};

gulp.task('default', gulp.series(clean, gulp.parallel(scripts, styles), manifest, generate));
gulp.task('build', gulp.series(clean, gulp.parallel(buildScripts, buildStyles), manifest,  generate));
gulp.task('watch', gulp.series(clean, generate, gulp.parallel(styles, scripts, watch)));
gulp.task(clean);

function clean() {
  return del([
    paths.dist,
    'manifest.yml'
  ]);
};

function styles() {
  return gulp.src(paths.styles.src + '/main.less')
    .pipe(plugins.sourcemaps.init())
    .pipe(plugins.less()
      .on('error', plugins.util.log))
    .pipe(plugins.rename('styles.css'))
    .pipe(plugins.sourcemaps.write('maps'))
    .pipe(gulp.dest(paths.styles.dist))
    .pipe(browserSync.stream());
};

function scripts() {
  return gulp.src(paths.scripts.src)
    .pipe(plugins.sourcemaps.init())
    .pipe(plugins.concat('scripts.js'))
    .pipe(plugins.sourcemaps.write())
    .pipe(gulp.dest(paths.scripts.dist))
    .pipe(browserSync.stream());
};

function buildStyles() {
 return gulp.src(paths.styles.src + '/main.less')
    .pipe(plugins.less()
      .on('error', plugins.util.log))
    .pipe(plugins.groupCssMediaQueries())
    .pipe(plugins.autoprefixer({ browsers: 'last 3 versions'}))
    .pipe(plugins.cleanCss())
    .pipe(plugins.rename('styles.css'))
    .pipe(gulp.dest(paths.styles.dist))
};

function buildScripts() {
  return gulp.src(paths.scripts.src)
    .pipe(plugins.concat('scripts.js'))
    .pipe(plugins.uglifyes())
    .pipe(gulp.dest(paths.scripts.dist))
};

function generate() {
  return plugins.run('vendor/bin/statie generate site --output=dist').exec();
};

function reload(done) {
  browserSync.reload();
  done();
}

function manifest(callback) {
  var css = fs.readFileSync(paths.styles.dist + '/styles.css', 'utf8');
  var js = fs.readFileSync(paths.scripts.dist + '/scripts.js', 'utf8');

  var hashCSS = crypto.createHash('md5').update(css).digest('hex').slice(0, 10);
  var hashJS = crypto.createHash('md5').update(js).digest('hex').slice(0, 10);

  return fs.writeFile('manifest.yml', `parameters:
    manifest:
        css: ${hashCSS}
        js: ${hashJS}`, callback);
}

function watch() {
  browserSync.init({
    server: paths.dist
  });

  gulp.watch(paths.styles.src + '/**/*.less', styles);
  gulp.watch(paths.scripts.src, scripts);
  gulp.watch(['*.yml', 'site'], gulp.series(generate, reload));
}
