let players = ['x', 'o'];
let activePlayer = 0;

let cells = 3;
let board = [];

function startGame() {
  for (let i = 0; i < cells; i++) {
    board[i] = [];
    for (let j = 0; j < cells; j++) {
      board[i][j] = '';
    };
  };
  activePlayer = 0;
  renderBoard(board);
};

function click(row, col) {
  board[row][col] = players[activePlayer];
  renderBoard(board);

  function check() {
    let count = 0;
    for (j = 0; j < cells; j++) {
      let countH = 0;
      let countV = 0;
      let countDL = 0;
      let countDR = 0;
      for (let i = 0; i < cells; i++) {    
        if (board[j][i] == players[activePlayer]) {
          countH += 1;
        };
        if (board[i][j] == players[activePlayer]) {
          countV += 1;
        };
        if (board[i][i] == players[activePlayer]) {
          countDL += 1;
        };
        let index = board[i].length - 1 - i;  
        if (board[i][index] == players[activePlayer]) {
          countDR += 1;
        };
        if (board[j][i] == players[0] || board[j][i] == players[1]) {
          count += 1;
        };
      };
      if (countH == cells || countV == cells || countDL == cells || countDR == cells) {
        showWinner(activePlayer);
      } else if (count == cells * cells) {
        showWinner();
      };
    };
  };
  check();

  switch (activePlayer) {
  case 1:
  activePlayer = 0;
  break;
  case 0:
  activePlayer = 1;
  };
};

