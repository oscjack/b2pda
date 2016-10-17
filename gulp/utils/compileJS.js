const gulp = require('gulp');
const plugins = require('gulp-load-plugins')();

function compileJS(srcFiles, dist)
{
    return gulp.src(srcFiles)
  	.pipe(plugins.sourcemaps.init())
    .pipe(plugins.uglify())
    .pipe(plugins.concat(dist.filename))
    .pipe(plugins.sourcemaps.write('.'))
    .pipe(gulp.dest(dist.fold));
}

module.exports = compileJS;
