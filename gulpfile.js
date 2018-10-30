/* jshint node: true */
'use strict';

var gulp = require('gulp');
var del = require('del');
var browserSync = require('browser-sync');
var gulpLoadPlugins = require('gulp-load-plugins');
var plugins = gulpLoadPlugins();

var paths = {
  base: './',
  dist: './.dist',
  files: {
    src: './www/*.*',
    dist: './.dist',
  },
  html: {
    src: './www/index.html',
    dist: './.dist'
  },
  styles: {
    src: './www/less',
    compile: './www/css',
    dist: './.dist/css',
  },
  scripts: {
    src: './www/js',
    compile: './www/js',
    dist: './.dist/js',
  },
};

var filesToDist = [
  // 'log/**/*',
  // 'temp/**/*',
  paths.styles.dist + '/styles.css',
  paths.scripts.dist + '/scripts.js',
  'www/*.*'
];

var scripts = [
//  'node_modules/randomcolor/randomColor.js',
  paths.scripts.src + '/*/*.js',
  paths.scripts.src + '/main.js',
];

gulp.task('browser-sync', function() {
  browserSync({
    server: {
      baseDir: './www'
    }
  });
});

gulp.task('clean', function() {
  del([
    paths.dist,
    'log/*',
    'temp/*',
    paths.styles.compile,
    paths.scripts.compile + '/scripts.js'
  ]);
});

gulp.task('styles', function() {
  gulp.src(paths.styles.src + '/main.less')
    .pipe(plugins.sourcemaps.init())
    .pipe(plugins.less()
      .on('error', plugins.util.log))
    .pipe(plugins.rename('styles.css'))
    .pipe(plugins.sourcemaps.write('maps'))
    .pipe(gulp.dest(paths.styles.compile))
    .pipe(browserSync.reload({
      stream: true
    }));
});

gulp.task('scripts', function() {
  gulp.src(scripts)
    // .pipe(plugins.jshint('.jshintrc'))
    // .pipe(plugins.jshint.reporter('default'))
    .pipe(plugins.sourcemaps.init())
    .pipe(plugins.concat('scripts.js'))
    .pipe(plugins.sourcemaps.write())
    .pipe(gulp.dest(paths.scripts.compile))
    .pipe(browserSync.reload({
      stream: true
    }));
});

gulp.task('build-styles', function() {
 gulp.src(paths.styles.src + '/main.less')
    .pipe(plugins.less()
      .on('error', plugins.util.log))
    .pipe(plugins.combineMediaQueries())
    .pipe(plugins.autoprefixer({ browsers: 'last 5 versions'}))
    .pipe(plugins.minifyCss())
    .pipe(plugins.rename('styles.css'))
    .pipe(gulp.dest(paths.styles.dist))
});

gulp.task('build-scripts', function() {
  gulp.src(scripts)
    .pipe(plugins.concat('scripts.js'))
    .pipe(plugins.uglify())
    .pipe(gulp.dest(paths.scripts.dist))
});

gulp.task('build-html', function() {
  gulp.src(paths.html.src)
    .pipe(plugins.htmlmin({
      collapseWhitespace: true,
      removeComments: true,
    }))
    .pipe(plugins.rename('index.php'))
    .pipe(gulp.dest(paths.html.dist));
});

gulp.task('build-files', function() {
  gulp.src([paths.files.src, '!' + paths.html.src], {
         dot: true
     })
    .pipe(gulp.dest(paths.files.dist));
});

gulp.task('build', [
  'build-styles',
  'build-scripts',
  'build-html',
  'build-files',
]);

gulp.task('default', ['styles', 'scripts', 'browser-sync'], function () {
  gulp.watch(paths.styles.src + '/**/*.less', ['styles']);
  gulp.watch(scripts, ['scripts']);
  gulp.watch('www/*.html', browserSync.reload);
});
