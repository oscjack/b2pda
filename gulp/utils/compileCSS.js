const gulp = require('gulp');
const plugins = require('gulp-load-plugins')();

function compileCss(srcFiles, dist)
{
	return gulp.src(srcFiles)
  	.pipe(plugins.sourcemaps.init())
    .pipe(plugins.less({strictMath: true}))
    .pipe(plugins.minifyCss({keepSpecialComments : 0}))
    .pipe(plugins.concat(dist.filename))
    .pipe(plugins.sourcemaps.write('.'))
    .pipe(gulp.dest(dist.fold));
}

module.exports = compileCss;
