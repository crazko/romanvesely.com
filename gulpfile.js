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
    src: 'src/less',
    dist: 'dist/css',
  },
  scripts: {
    src: [
      'node_modules/prismjs/prism.js',
      'src/js/*/*.js',
    ],
    dist: 'dist/js',
  },
};

gulp.task('default', gulp.series(clean, gulp.parallel(scripts, styles), manifest, generate));
gulp.task('build', gulp.series(clean, gulp.parallel(buildScripts, buildStyles), manifest,  generate));
gulp.task('watch', gulp.series(clean, generate, gulp.parallel(styles, scripts, watch)));
gulp.task(clean);

function clean() {
  return del([
    paths.dist,
    'src/_config/manifest.neon'
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
    .pipe(plugins.minifyCss())
    .pipe(plugins.rename('styles.css'))
    .pipe(gulp.dest(paths.styles.dist))
};

function buildScripts() {
  return gulp.src(paths.scripts.src)
    .pipe(plugins.concat('scripts.js'))
    .pipe(plugins.uglify())
    .pipe(gulp.dest(paths.scripts.dist))
};

function generate() {
  return plugins.run('vendor/bin/statie generate --source=src --output=dist').exec();
};

function reload(done) {
  browserSync.reload();
  done();
}

function manifest(callback) {
  var css = fs.readFileSync(paths.styles.dist + '/styles.css', 'utf8');
  var hash = crypto.createHash('md5').update(css).digest('hex').slice(0, 10);

  return fs.writeFile('src/_config/manifest.neon', `manifest:
	css: ${hash}`, callback);
}

function watch() {
  browserSync.init({
    server: paths.dist
  });

  gulp.watch(paths.styles.src + '/**/*.less', styles);
  gulp.watch(paths.scripts.src, scripts);
  gulp.watch(['src/**/*', '!src/less/**/*', '!src/js/**/*'], gulp.series(generate, reload));
}
