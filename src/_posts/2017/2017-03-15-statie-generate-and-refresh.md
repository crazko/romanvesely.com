---
layout: post
title: 'Statie: generate & refresh'
description: '''
Make development with <a href="https://github.com/Symplify/Statie">Statie</a> a bit more convenient with little use of <a href="http://gulpjs.com/">gulp</a> and <a href="https://browsersync.io/">Browsersync</a>. We will also take a look on how to implement <a href="http://lesscss.org/">Less</a> preprocessor in the workflow.
'''
---

With a rising popularity of static site generators we can find that there are [many of them][1] already in use. This blog runs on [Statie][2], another such a tool written by [Tomas Votruba](https://www.tomasvotruba.cz/), which differs from the others with [Nette](https://nette.org/) and its templating engine [Latte](https://latte.nette.org/) used in the background.

If you are not aware what is this tool all about lets take firstly a look at a post serie about it on [Tomas' blog][3]. It will lead you from the very beginning on how to run your own site upon Statie, so I won't deal with this here.

In the end of the mentioned blog post we can find a [simple gulp task](https://www.tomasvotruba.cz/blog/2017/02/20/statie-how-to-run-it-locally/#minitip-use-gulp-work-for-you) that runs generate command on every change in the source files. This is surely handy, but you still need to refresh your browser to be able to see your changes. With <em>Browsersync</em> we can make this step unecessary.

## Gulp version
Previously I was doing some harakiri with runSequence package... Gulp v4

## Add all dependencies || Preparation

``` bash
$ npm install --save-dev gulp gulp-watch browser-sync
```

Add some foundation to the `gulpfile.js`:

``` javascript
var gulp = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('browser-sync', function() {
  browserSync.init({
    server: {
      baseDir: 'dest' // your output folder
    }
  });
});

gulp.task('default', function() {

});
```

## Integrate preprocessor
I often use Less to not get headache with working with CSS. Lets also add it to our Statie-based project and integrate it into the generating workflow.

``` bash
$ npm install --save-dev gulp-less
```

## Sources
- [StaticGen - Top Open-Source Static Site Generators][1]
- [Statie - PHP Static Site Generator][2]
- [Statie: How to run it Locally][3]
- [The Complete-Ish Guide to Upgrading to Gulp 4](https://www.joezimjs.com/javascript/complete-guide-upgrading-gulp-4/)
- [Browsersync - Browser Reloading](https://www.browsersync.io/docs/gulp#gulp-reload)

[1]: http://www.staticgen.com/
[2]: https://github.com/Symplify/Statie
[3]: https://www.tomasvotruba.cz/blog/2017/02/20/statie-how-to-run-it-locally/
