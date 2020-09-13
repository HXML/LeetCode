/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function (arr) {
    var _arr = [...new Set(arr.slice().sort((a, b) => a - b))];
    var ans = [];
    for (var i = 0; i < arr.length; i++) {
      for (var j = 0; j < _arr.length; j++) {
        if (arr[i] === _arr[j]) {
          ans.push(j + 1);
          break;
        }
      }
    }
    return ans;
  };
  
