/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function(salary) {
    salary.sort((a, b) => a - b);
    salary.shift();
    salary.pop();
    let sum = salary.reduce((pre, cur) => {
        return pre + cur;
    });
    return sum / salary.length;
};