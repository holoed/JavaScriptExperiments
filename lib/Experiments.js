/*
 * Experiments
 * https://github.com/epentangelo/JavaScriptExperiments
 *
 * Copyright (c) 2014 holoed
 * Licensed under the MIT license.
 */

'use strict';

var _ = require('underscore');
var rx = require('rx');

exports.awesome = function() {
  return 'awesome';
};


exports.sequence = function(source) {
	return _.foldl(source, 
		function(acc, x) { 
			return acc.selectMany(function(accp) { return x; } , function (x1, x2) { return x1.concat([x2]); } );
		}, rx.Observable.just([]));
};
