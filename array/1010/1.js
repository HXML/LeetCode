/**
 * @param {number[]} time
 * @return {number}
 */
var numPairsDivisibleBy60 = function(time) {
    let m = new Map();
    time.forEach((item, index) => {
        let t = m.get(item % 60);
        if (!t) {
            t = 0;
        }
        t++;
        m.set(item % 60, t);
    })
    let ans = 0;
    for (let arr of m) {
        if (arr[0] === 0 || arr[0] === 30) {
            ans += m.get(arr[0]) * (m.get(arr[0]) - 1) / 2;
        } else if (m.get(60 - arr[0])) {
            ans += m.get(60 - arr[0]) * m.get(arr[0]);
            m.set(arr[0], 0);
        }
    }
    return ans;
};