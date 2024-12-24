var countBattleships = function(board) {
    let ans = 0
   for(let i=0; i < board.length; i++){
    for(let j=0; j < board[i].length; j++){
        if(board[i][j] === "X"){
            let cond1 = i === 0 || board[i-1][j] === "."
            let cond2 = j === 0 || board[i][j-1] === "."
            if(cond1 && cond2) ans++
        }
    }
   }
   return ans
};
