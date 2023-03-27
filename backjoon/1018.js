let fs = require('fs');
let input = fs.readFileSync("예제.txt").toString().trim().split('\n');
///dev/stdin
const chessSize = input[0].split(" ");
const givenBoard = input.slice(1);

function solution() {
  const [chessHeight, chessWidth] = chessSize; // 10 13
  const currentBoards = [];

  for (let i = 8; i <= chessHeight; i++) {
    const currentBoardHeight = givenBoard.slice(i - 8, i);

    for (let j = 8; j <= chessWidth; j++) {
      const currentBoardWidth = currentBoardHeight.map((element) => element.slice(j - 8, j));
      currentBoards.push(currentBoardWidth);
    }
  }
  const answer = currentBoards.map((board) => Math.min(verifyChess(board, "black"), verifyChess(board, "white")));

  return Math.min(...answer);
}

function verifyChess(board, color) {
  const blackFirstBoard = "BWBWBWBW".split("");
  const whiteFirstBoard = "WBWBWBWB".split("");
  let uncorrectBoardCount = 0;
  let blackFirst = null;
  let whiteFirst = null;

  if (color === "black") {
    blackFirst = true;
  }

  if (color === "white") {
    whiteFirst = true;
  }

  board.forEach((oneline) => {
    const line = oneline.split("");
    if (blackFirst) {
      const uncorrectBoard = line.filter((oneBoard, index) => {
        if(oneBoard !== blackFirstBoard[index]){
          return true;
        } else {
          return false;
        }
      })

      uncorrectBoardCount += uncorrectBoard.length;
      blackFirst = false;
      whiteFirst = true;

      return;
    }

    if (whiteFirst) {
      const uncorrectBoard = line.filter((oneBoard, index) => {
        if (oneBoard !== whiteFirstBoard[index]) {
          return true;
        } else {
          return false;
        }
      })

      uncorrectBoardCount += uncorrectBoard.length;
      whiteFirst = false;
      blackFirst = true;

      return;
    }
  });

  return uncorrectBoardCount;
}


console.log(solution());
