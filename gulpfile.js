var gulp = require('gulp');
var del = require('del');
var browserSync = require('browser-sync').create();
var gulpLoadPlugins = require('gulp-load-plugins');
var plugins = gulpLoadPlugins();

var paths = {
  dist: './dist',
  styles: {
    src: './src/less',
    compile: './src/css',
    dist: './dist/css',
  },
  scripts: {
    src: './src/js',
    compile: './src/js',
    dist: './dist/js',
  },
};

var scripts = [
  paths.scripts.src + '/*/*.js',
  paths.scripts.src + '/main.js',
];

gulp.task('browser-sync', function() {
  browserSync.init({
    server: {
      baseDir: './dist'
    }
  });
});

gulp.task('clean', function() {
  del([
    paths.dist,
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
    .pipe(gulp.dest(paths.styles.dist))
    .pipe(browserSync.stream());
});

gulp.task('scripts', function() {
  gulp.src(scripts)
    .pipe(plugins.sourcemaps.init())
    .pipe(plugins.concat('scripts.js'))
    .pipe(plugins.sourcemaps.write())
    .pipe(gulp.dest(paths.scripts.dist))
    .pipe(browserSync.stream());
});

gulp.task('build:styles', function() {
 gulp.src(paths.styles.src + '/main.less')
    .pipe(plugins.less()
      .on('error', plugins.util.log))
    .pipe(plugins.groupCssMediaQueries())
    .pipe(plugins.autoprefixer({ browsers: 'last 3 versions'}))
    .pipe(plugins.cleanCss())
    .pipe(plugins.rename('styles.css'))
    .pipe(gulp.dest(paths.styles.compile))
});

gulp.task('build:scripts', function() {
  gulp.src(scripts)
    .pipe(plugins.concat('scripts.js'))
    .pipe(plugins.uglify())
    .pipe(gulp.dest(paths.scripts.compile))
});

gulp.task('generate', function (){
  return plugins.run('composer generate').exec();
});

gulp.task('build', plugins.sequence(
  'clean',
  [
    'build:styles',
    'build:scripts',
  ]
));

gulp.task('default-sequence', plugins.sequence(
  [
    'styles',
    'scripts',
  ],
  'generate',
  'browser-sync'
));

gulp.task('default', ['default-sequence'], function () {
  gulp.watch(paths.styles.src + '/**/*.less', ['styles']);
  gulp.watch(scripts, ['scripts']);
  gulp.watch(['./src/**/*', '!./src/less/**/*', '!./src/scripts/**/*'], function (event) {
    plugins.sequence('generate', browserSync.reload)(function (error) {
      if (error) console.log(error)
    })
  });
});
