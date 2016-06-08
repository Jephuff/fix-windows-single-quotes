var fixWindowsSingleQoutes = require('../index.js');
var tests = require('./tests.js');
var compare = require('./compareArray.js');

tests.forEach(function(test, i) {
  var testNum = i + 1;
  var error = compare(fixWindowsSingleQoutes(test.input), test.output);
  console.log((error || 'PASSED') + ' for test ' + testNum);
});
