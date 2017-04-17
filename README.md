## first blood 
this is a simple gulp watch process, compile flow not interrupted with error
    
    npm install --save-dev mstaticer-watch
### Basic usage
##### directory structure
    es6
    --- a.es6
    scss
    --- a.scss        

##### usage
``` javascript
var processWatch = require("mstaticer-watch")
var gulp = require("gulp")

gulp.task('watch',processWatch({
    jsOutDir:"./",
    cssOutDir:"../../css/"
}))
```# gulp-mix-watch
