'use strict';

var Experiments = require('../lib/Experiments.js');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

var rx = require('rx');
var _ = require('underscore');


exports['awesome'] = {
  setUp: function(done) {
    // setup here
    done();
  },
  'no args': function(test) {
    test.expect(1);

    var data = [1,2,3];
    var manyObs = _.map(data, function(x) { return rx.Observable.just(x); });
    var seqObs = Experiments.sequence(manyObs);
    var results = [];
    seqObs.subscribe(function (x) { results = x; });
    
    test.deepEqual(results, data);
    
    test.done();
  },
};
