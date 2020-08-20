/**
 * @param {string[]} A
 * @return {string[]}
 */
var commonChars = function(A) {
    let ans = [],
        word = A[0],
        slen = word.length
    for (let s of word) {
        if (A.every(m => m.includes(s))) {
            A = A.map(m => m.replace(s, ''))
            ans.push(s)
        }
    }
    return ans
};