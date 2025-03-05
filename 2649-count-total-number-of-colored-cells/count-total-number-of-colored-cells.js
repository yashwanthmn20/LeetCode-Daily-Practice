/**
 * @param {number} n
 * @return {number}
 */
var coloredCells = function(n) {
    let midRow = (n*2)-1

    let rowTopBottom = (n-1)**2;

    return midRow + (2*rowTopBottom);
};