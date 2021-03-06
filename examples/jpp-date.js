const assert = require('assert');
const parse = require('@brillout/jpp/parse');
const stringify = require('@brillout/jpp/stringify');

let obj = {
  time: new Date(),
};

assert(obj.time.constructor===Date);

// JSON++ preserves Date
obj = parse(stringify(obj));
assert(obj.time.constructor===Date);
