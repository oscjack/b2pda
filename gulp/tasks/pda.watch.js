const gulp = require('gulp');

function watch()
{
	//watch less & css
    gulp.watch(
    	[
    		'css/*'
        ],
        ['pda:css']
    );

	//watch js
	gulp.watch(
		[
		], 
		['pda:script']
	);
}

module.exports = watch;

