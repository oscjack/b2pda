const utilCompileCss = require('../utils/compileCss');

const srcFiles = [
	'css/*.less'	
];

const dist = {
	'fold': 'dist',
	'filename': 'app.base.css'
};

function compileCss()
{
	let result = utilCompileCss(srcFiles, dist);

	return result;
}

module.exports = compileCss;

