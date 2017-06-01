# Roman Vesely - personal site [![Build Status](https://img.shields.io/travis/crazko/romanvesely.com.svg)](https://travis-ci.org/crazko/romanvesely.com)

[![Validate RSS](https://img.shields.io/badge/validate-rss-orange.svg)](https://validator.w3.org/feed/check.cgi?url=http%3A//romanvesely.com/rss.xml)

My personal web site [http://romanvesely.com](http://romanvesely.com).

## What's inside?
- PHP static site generator [Statie](https://github.com/Symplify/Statie) that is built upon [Nette](https://nette.org/) framework.
- CSS comes from [Less](http://lesscss.org/) pre-processor.
- Assets and build are handled by task runner [gulp](http://gulpjs.com/) via [Travis](https://travis-ci.org).
- Hosted directly from this repository thanks to [GitHub Pages](https://pages.github.com).

## Use it

- `$ composer install && npm install`

Commands:
- `$ gulp` - generates site from source files
- `$ gulp watch` - starts local server and acts upon changes
- `$ gulp build` - generates version ready for production
- `$ gulp clean` - removes output folder
