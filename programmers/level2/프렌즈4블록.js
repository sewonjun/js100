function solution(m, n, board) {
  var answer = 0;
  const reversed = [];
  for (let i = 0; i < n; i++) {
    const temp = [];
    for (let j = 0; j < m; j++) {
      temp.push(board[j][i]);
    }
    reversed.push(temp.reverse());
  }
  console.log(reversed);
  for (let i = 0; i < reversed.length - 1; i++) {
    for (let j = 0; j < reversed[i].length - 1; j++) {
      // console.log(i, j);
      bingo(i, j);
    }
  }
  //   bingo(0, 0);
  function bingo(i, j) {
    const row = i;
    const column = j;
    function checkAbleToMove(movedRow, movedColumn) {
      if (movedRow >= 0 && movedColumn >= 0) {
        const validateRow =
          movedColumn > reversed[movedRow].length - 1 ? false : true;
        if (validateRow === false) {
          return false;
        } else {
          return reversed[movedRow][movedColumn];
        }
      } else {
        return false;
      }
    }

    const right = checkAbleToMove(row, column + 1);
    const bottom = checkAbleToMove(row + 1, column);
    const diagonal = checkAbleToMove(row + 1, column + 1);
    console.log(right, bottom, diagonal);
    return answer;
  }
}
//solution1
const m = 4;
const n = 5;
const board = ["CCBDE", "DE", "AABF", "F"];

const fourBlockAnswer = solution(m, n, board);

console.log(fourBlockAnswer);
