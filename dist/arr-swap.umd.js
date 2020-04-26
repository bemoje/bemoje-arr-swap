(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global = global || self, global['arr-swap'] = factory());
}(this, (function () { 'use strict';

	/**
	 * Swap array elements in place. Runtime: O(1)
	 * @param {array} arr to be modified
	 * @param {number} from index of the first element
	 * @param {number} to index of the 2nd element
	 * @returns {void}
	 */
	function arrSwap(arr, from, to) {
	[arr[from], arr[to]] = [arr[to], arr[from]];
	}

	return arrSwap;

})));
