/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(board, words) {
    const directions = [[-1,0], [0,1], [1,0], [0,-1]];
    let res = [];

    const buildTrie = () => {
        const root = {}
        for (const w of words){
            let node = root;
            for (const c of w){
                if(node[c] == null) node[c] = {};
                node = node[c];
            }
            node["word"] = w; //same as writing the below line
            // node.word = w;
        }
        return root;
    };

    const search = (node, x, y) => {
        // console.log(node.word, x, y);
        // console.log(JSON.stringify(node, null, 2));
        if(node.word != null){
            res.push(node.word);
            // console.log(res);
            node.word = null;
        }
    if (x < 0 || x >= board.length || y < 0 || y >= board[0].length) return;
    if (node[board[x][y]] == null) return;

    const c = board[x][y];
    board[x][y] = '#'; // Mark visited
    for (const [dx, dy] of directions) {
      const i = x + dx;
      const j = y + dy;
    //   console.log(JSON.stringify(c, null, 2));
      search(node[c], i, j);
    }
    board[x][y] = c; // Reset
  };

    const root = buildTrie();
    // console.log(JSON.stringify(root, null, 2));

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            // console.log(root,i,j);
            search(root, i, j);
    }
  }
    // console.log(res);
    return res;
};