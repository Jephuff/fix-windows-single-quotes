var fixWindowsSingleQoutes = require('../index.js');
var compare = require('./compareArray.js');
var argv = process.argv.slice(2);
var parsed = fixWindowsSingleQoutes(argv);

console.log('MATCH: ' + !compare(argv, parsed));
console.log('input: ', argv);
console.log('output: ', parsed);
