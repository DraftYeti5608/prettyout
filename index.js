'use strict';

/**
 * Makes output more eyecatching
 * @param {string} string
 * @param {char} chr
 * @param {bool} boxed
 * @return {string}
 */


function returnOut(string, chr, boxed) {
	var stringLen = string.length + (boxed ? 5 : 1);
	var padding   = "\n" + Array(stringLen).join(chr) + "\n";
	var newString = padding + (boxed ? chr+" " : "") + string + (boxed? " "+chr : "") + padding;
	return newString;
}

function printOut(string, chr, boxed) {
	console.log(returnOut(string, chr, boxed));
}

module.exports = {returnOut, printOut};
