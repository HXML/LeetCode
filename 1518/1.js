var numWaterBottles = function(numBottles, numExchange) {
    let res = 0;

    function nums(numBottles, numExchange, limt) {
        if (numBottles == 0 && limt < numExchange) {
            return;
        }
        res += numBottles;
        let Bottles = Math.floor(limt / numExchange);
        let limts = numBottles + (limt % numExchange);
        nums(Bottles, numExchange, limts);
    }
    nums(numBottles, numExchange, 0);
    return res;
};