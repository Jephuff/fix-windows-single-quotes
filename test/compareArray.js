module.exports = function(arr1, arr2) {
  var error = null;
  if(arr1.length !== arr2.length) {
    error = 'FAILED: length does not match';
  } else {
    for(var j = 0; j < arr1.length; j += 1) {
      if(arr1[j] !== arr2[j]) {
        error = 'FAILED: values do not match';
      }
    }
  }
  return error;
};
