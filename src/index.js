
exports.min = function min (array) {
  
    if(array !== undefined && array.length !== 0) {
        let result = array[0];
        for ( let i = 0; i < array.length; i ++) {
            result = Math.min(result, array[i]);
        }
        return result;
    }
  return 0;
}

exports.max = function max (array) {
  
    if(array !== undefined && array.length !== 0) {
        let result = array[0];
        for ( let i = 0; i < array.length; i ++) {
            result = Math.max(result, array[i]);
        }
        return result;
    }
  return 0;
}

exports.avg = function avg (array) {
  
    if(array !== undefined && array.length !== 0) {
        let result = 0;
        for ( let i = 0; i < array.length; i ++) {
            result += array[i];
        }
        return result / array.length;
    }
  return 0;
}
