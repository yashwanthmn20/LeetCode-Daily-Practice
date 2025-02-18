/**
 * @param {string} tiles
 * @return {number}
 */
var numTilePossibilities = function(tiles) {
    let tileSetUnique = new Set();
    let tilesExtraCount = new Map();
    let count = 0;
    let tilesArr = tiles.split("");

    let tilesLen = tilesArr.length;

    for (let i=0 ; i<tilesLen ; i++){
        let currentValue = tilesExtraCount.get(tilesArr[i]);
        if (currentValue !== undefined) {
             tilesExtraCount.set(tilesArr[i], currentValue + 1);
        } else {
             tilesExtraCount.set(tilesArr[i], 1) 
         }
   }
        console.log([...tilesExtraCount.entries()]);

        function backtrack(path, remaining) {
        if (path.length > 0) {
            // Use regex to validate and store sequences
            if (/^[A-Z]+$/.test(path)) {
                tileSetUnique.add(path);
            }
        }

        for (let i = 0; i < remaining.length; i++) {
            backtrack(path + remaining[i], remaining.slice(0, i) + remaining.slice(i + 1));
        }
    }

    // Start backtracking with an empty path
    backtrack("", tiles);

    return tileSetUnique.size;



};