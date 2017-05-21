## first blood 

[![Greenkeeper badge](https://badges.greenkeeper.io/yinshuxun/gulp-mix-watch.svg)](https://greenkeeper.io/)
this is a simple gulp watch process, compile flow not interrupted with error
    
    npm install --save-dev gulp-mix-watch
### Basic usage
##### directory structure
    es6
    --- a.es6
    scss
    --- a.scss        

##### usage
``` javascript
var processWatch = require("gulp-mix-watch")
var gulp = require("gulp")

gulp.task('watch',processWatch({
    jsOutDir:"./",
    cssOutDir:"../../css/"
}))
```# gulp-mix-watch
