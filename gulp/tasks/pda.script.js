const utilCompileJS = require('../utils/compileJS');

const srcFiles = [
];

const dist = {
	'fold': 'dist/js',
	'filename': 'app.base.js'
};

function compileScript()
{
	let result = utilCompileJS(srcFiles, dist);

	return result;
}

module.exports = compileScript;

