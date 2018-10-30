# Personal Site

version of 2016

## Deployment

``` bash
$ gulp build
$ php deployment.phar deployment.ini
```

- [deployment.phar](https://github.com/dg/ftp-deployment)

## Available tasks

- **default** - run browser-sync
- **styles** - compile less files
- **scripts** - compile js files
- **clean** - clean the *.dist/* directory and some generated files
- **build** - copy everything needed to *.dist/* directory
