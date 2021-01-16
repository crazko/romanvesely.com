---
title: Implement a CSS preprocessor into Statie project
sources:
  - - '/statie-generate-and-refresh'
    - 'How to re-generate and refresh static website in Statie?'
  - - 'http://lesscss.org/'
    - 'Less preprocessor'
  - - 'https://browsersync.io/docs/gulp#gulp-sass-css'
    - 'Browsersync - SASS + CSS Injecting'
---

The most important part of a web page is its content. And I think that every web page content deserves to have some look. Take a look at how to implement [Less](http://lesscss.org/) preprocessor into Statie project built with gulp-based workflow.

<Tip>

**Notice:** [Statie was deprecated](https://www.tomasvotruba.com/blog/2020/03/16/statie-is-dead-long-live-symfony-static-dumper/).

</Tip>

In the [previous post](/statie-generate-and-refresh) I showed a convenient way of browser live reloading at every change made in source files of Statie project. To make it even better we can add a gulp task for processing the CSS, so every change made in the styles will be immediately presented in the browser.

I often use a preprocessor to not get a headache with working with CSS. There are several popular tools ready for use: [Sass](http://sass-lang.com/), [Less](http://lesscss.org/) and [Stylus](http://stylus-lang.com/).

My chosen one is Less, but **you can use whatever one is suitable for you**. The process of addition would be the same.

Now, let's add it to our project and integrate it into the generating workflow.

## Preparation

Add a package that can work with Less:

```bash
$ npm install --save-dev gulp-less
```

Prepare a function which will be used later in the default gulp task. Do not forget to require the package in the head of your `gulpfile.js`.

```javascript
var less = require('gulp-less');

function styles() {
  return gulp
    .src('source/less/styles.less')
    .pipe(less())
    .pipe(gulp.dest('output/css/'))
    .pipe(browserSync.stream());
}
```

Do you see that `browserSync.stream()` in the last pipe? [It tells Browsersync][3] to reload at the time when compiling is finished.

## Put pieces together

Now we need to add this function to the default gulp task, and also edit the `watch()` function - we don't want to generate new content when _\*.less_ files were changed, but instead create new styles.

Here is the final version of `gulpfile.js` - original code from the previous post with new changes. You can check what is new or updated:

```javascript
var gulp = require('gulp');
var run = require('gulp-run');
var less = require('gulp-less'); // added
var browserSync = require('browser-sync').create();

gulp.task('default', gulp.parallel(styles, generate, watch)); // updated

// added
function styles() {
  return gulp
    .src('source/less/styles.less')
    .pipe(less())
    .pipe(gulp.dest('output/css/'))
    .pipe(browserSync.stream());
}

function generate() {
  return run('vendor/bin/statie generate').exec();
}

function reload(done) {
  browserSync.reload();
  done();
}

function watch() {
  browserSync.init({
    server: 'output',
  });

  gulp.watch('source/**/*.less', styles); // added
  gulp.watch(['source/**/*', '!source/less/**/*'], gulp.series(generate, reload)); // updated
}
```

<Tip>

Check the [example project](https://github.com/crazko/statie-gulp-example) that uses Statie and gulp-driven workflow.

</Tip>

## Conclusion

Automation rules the development, right? Statie, gulp and Less, what a pleasure to create something great.

Some additional thoughts on improvement:

- You can **deal with javascript** in the same way as with Less styles, just create a new function for that and edit the watch function and gulp task.
- You can also add a different task to **build production-ready code** (minification, media queries grouping, etc.) - as I did. Have a look at the [gulpfile.js of this site](https://github.com/crazko/romanvesely.com/blob/master/gulpfile.js).
