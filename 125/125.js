var isPalindrome = function(s) {
    let str = s.replace(/\W|_/g, '').toLowerCase()
    let resv = str.split('').reverse().join('')
    return str === resv
};