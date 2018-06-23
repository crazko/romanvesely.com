# Roman Vesely - personal site [![Build Status](https://img.shields.io/travis/crazko/romanvesely.com.svg)](https://travis-ci.org/crazko/romanvesely.com)

[![Validate RSS](https://img.shields.io/badge/validate-rss-orange.svg)](https://validator.w3.org/feed/check.cgi?url=http%3A//romanvesely.com/rss.xml)
[![Validate JSON Feed](https://img.shields.io/badge/validate-json_feed-green.svg)](http://validator.jsonfeed.org/?url=http%3A%2F%2Fromanvesely.com%2Ffeed.json)

My personal web site [https://romanvesely.com](http://romanvesely.com).

## What's inside?
- PHP static site generator [Statie](https://github.com/Symplify/Statie) - see documentation at [www.statie.org](https://www.statie.org)
- CSS comes from [Less](http://lesscss.org/) pre-processor.
- Assets and build are handled by task runner [gulp](http://gulpjs.com/) via [Travis](https://travis-ci.org).
- Hosted on [Netlify](https://www.netlify.com).

## Use it

- `$ composer install && npm install`

Commands:
- `$ npm start` - starts local server and acts upon changes
- `$ npm run dev` - generates site from source files
- `$ npm run build` - generates version ready for production
- `$ npm run clean` - removes output folder
- `$ composer check` - runs code standard and static analysis
- `$ composer fix` - fixes code standard errors

`./bin/` files:

- `social-images` - creates images suitable for social networks in "dev.to" style
- `deploy` - creates and sends zip with all data to Netlify in the end of Travis build. Now, as the PHP7.2 is available in Netlify, whole build process could be moved there and drop this step.
