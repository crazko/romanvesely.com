---
layout: post
title: 'Implement a CSS preprocessor into Statie project'
description: '''
The most important part of a web page is its content. And I think that every web page content deserves to have some look. Take a look at how to implement <a href="http://lesscss.org/">Less</a> preprocessor into Statie project built with gulp-based workflow.
'''
---

In the [previous post][1] I showed a convenient way of browser live reloading at every change made in source files of Statie project. To make it even better we can add a gulp task for processing the CSS, so every change made in the styles will be immediately presented in the browser.

I often use a preprocessor to not get a headache with working with CSS. There are several popular tools ready for use: [Sass](http://sass-lang.com/), [Less][2] and [Stylus](http://stylus-lang.com/).

My chosen one is Less, but **you can use whatever one is suitable for you**. The process of addition would be the same.

Now, let's add it to our project and integrate it into the generating workflow.

## Preparation

Add a package that can work with Less:

``` bash
$ npm install --save-dev gulp-less
```

Prepare a function which will be used later in the default gulp task. Do not forget to require the package in the head of your `gulpfile.js`.

``` javascript
var less = require('gulp-less');

function styles() {
  return gulp.src('source/less/styles.less')
    .pipe(less())
    .pipe(gulp.dest('output/css/'))
    .pipe(browserSync.stream());
};
```

Do you see that `browserSync.stream()` in the last pipe? [It tells Browsersync][3] to reload at the time when compiling is finished.

## Put pieces together

Now we need to add this function to the default gulp task, and also edit the `watch()` function - we don't want to generate new content when _*.less_ files were changed, but instead create new styles.

Here is the final version of `gulpfile.js` - original code from the previous post with new changes. You can check what is new or updated:

``` javascript
var gulp = require('gulp');
var run = require('gulp-run');
var less = require('gulp-less'); // added
var browserSync = require('browser-sync').create();

gulp.task('default', gulp.parallel(styles, generate, watch)); // updated

// added
function styles() {
  return gulp.src('source/less/styles.less')
    .pipe(less())
    .pipe(gulp.dest('output/css/'))
    .pipe(browserSync.stream());
};

function generate() {
  return run('vendor/bin/statie generate').exec();
};

function reload(done) {
  browserSync.reload();
  done();
}

function watch() {
  browserSync.init({
    server: 'output'
  });

  gulp.watch('source/**/*.less', styles); // added
  gulp.watch(['source/**/*', '!source/less/**/*'], gulp.series(generate, reload)); // updated
}
```

## Conclusion
Automation rules the development, right? Statie, gulp and Less, what a pleasure to create something great.

Some additional thoughts on improvement:

- You can **deal with javascript** in the same way as with Less styles, just create a new function for that and edit the watch function and gulp task.
- You can also add a different task to **build production-ready code** (minification, media queries grouping, etc.) - as I did. Have a look at the [gulpfile.js of this site](https://github.com/crazko/romanvesely.com/blob/master/gulpfile.js).

## Sources
- [How to re-generate and refresh static website in Statie?][1]
- [Less preprocessor][2]
- [Browsersync - SASS + CSS Injecting][3]

[1]: /statie-generate-and-refresh
[2]: http://lesscss.org/
[3]: https://browsersync.io/docs/gulp#gulp-sass-css
