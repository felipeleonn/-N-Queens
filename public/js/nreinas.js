if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", ready);
} else {
  ready();
}

function ready() {

  function solveNQueens(N) {
    const solutions = [];

    function canPlaceQueen(board, row, col) {

      for (let i = 0; i < N; i++) {
        if(board[row][i] === 'Q') {
          return false
        }
      }

      for (let i = 0; i < N; i++) {
        if(board[i][col] === 'Q') {
          return false
        }
      }

      for (let i = row, j = col; i >= 0 && j < N; i--, j++) {
        if (board[i][j] === 'Q') {
          return false;
        }
      }

      for (let i = row, j = col; i < N && j >= 0; i++, j--) {
        if (board[i][j] === 'Q') {
          return false;
        }
      }

      return true
    }


    function backtrack(board, row) {
      if (row === N) {
        return solutions.push(board.map(row => [...row]));
      }
  
      for (let col = 0; col < N; col++) {
        if (canPlaceQueen(board, row, col)) {
          board[row][col] = 'Q';
          backtrack(board, row + 1);
          board[row][col] = '.';
        }
      }
    }

    const board = Array.from({ length: N }, () => Array(N).fill('.'));
    backtrack(board, 0);
  
    return solutions
  }




  const N = 4;
  const soluciones = solveNQueens(N);

  soluciones.forEach((solucion, index) => {
    console.log(`Solución ${index + 1}:`);
    solucion.forEach((fila) => {
      console.log(fila);
    });
    console.log(' ');
  });








}



