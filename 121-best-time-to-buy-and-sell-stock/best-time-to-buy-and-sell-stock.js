/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let maximumProfit = 0;
    let minPrice = Infinity;

    for (let currPrice of prices){

        (minPrice > currPrice) && (minPrice = currPrice);

        // if(minPrice > currPrice){
        //     minPrice = currPrice;
        // }

        (maximumProfit < currPrice-minPrice) && (maximumProfit = currPrice-minPrice);

        // if(maximumProfit < currPrice-minPrice){
        //     maximumProfit = currPrice-minPrice
        // }
    }
    return maximumProfit;
};