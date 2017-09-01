/*** node ./node_modules/eslint/bin/eslint.js --fix eslint_format_test.js ***/
function merge () {
	var ret = {};
	for (var i in arguments) {
		var m = arguments[i];
		for (var j in m) ret[j] = m[j];
	}
	return ret;
}