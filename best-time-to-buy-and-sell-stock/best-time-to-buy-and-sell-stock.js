/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let min = prices[0];
    let max = min;
    let dif = 0;
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] < min) {
            min = prices[i];
            max = prices[i];
        }
        if (prices[i] > max) {
            max = prices[i];
        }
        if (max - min > dif) {
            dif = max - min;
        }
    }
    return dif;
};