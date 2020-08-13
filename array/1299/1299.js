/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {
    let nums = [-1]
    let temp = arr[arr.length - 1];
    for (let w = arr.length - 1; w > 0; w--) {
        if (temp < arr[w]) temp = arr[w];
        nums.unshift(temp)
    }
    return nums


};