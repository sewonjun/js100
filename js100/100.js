const puzzle = [
  [0, 0, 0, 0],
  [0, 1, 0, 3],
  [2, 5, 0, 1],
  [2, 4, 4, 1],
  [5, 1, 1, 1],
];
const manipulate = [1, 1, 1, 1, 3, 3, 3];

//열 정렬에서 행 정렬로 바꾸는 과정
let row = [];

for (j = 0; j < puzzle[0].length; j++) {
  let row1 = [];
  for (i = 0; i < puzzle.length; i++) {
    if (puzzle[i][j] !== 0) {
      row1.push(puzzle[i][j]);
    }
  }
  row.push(row1);
}

console.log(row);

//행 정렬로 바꾼것을 mainpulate를 실행시켜 한 배열안에 넣어둔다.
//이때 들어갈 것이 없으면 undefined가 들어갈까? 아니면 내가 넣어줘야 하는걸까..
//1. 무작정 반복문을 돌려본다. 예외처리 안함
let resultArray = [];
for (e of manipulate) {
  let a = row[e - 1].shift();
  if (a === undefined) {
    resultArray.push(-1);
  } else {
    resultArray.push(a);
  }
}

console.log(resultArray);

//finalResult 배열 안에 최종적으로 더할 숫자들만 넣기.
finalResult = [];
for (let i = 0; i < resultArray.length; i++) {
  if (resultArray[i] == resultArray[i + 1]) {
    finalResult.push(resultArray[i] * 2);
  } else if (resultArray[i] == -1) {
    finalResult.push(resultArray[i]);
  } else {
    finalResult.push(0);
  }
}
console.log(finalResult);

//최종적으로 다 더하기
let result = finalResult.reduce((prev, curr) => prev + curr);
console.log(result);

//--------춘구님 코드 --------------
/**
 * 주어진 배열에서 0을 제거하고 같은 열의 값들을 행으로 묶어 반환하는 함수
 * @param {number[][]} board 이차원 배열
 * @returns {number[][]} 이차원 배열
 */
function refineBoard(board) {
  const refinedBoard = [];
  // 행과 열의 길이를 구해놓는다.
  const rowLength = board.length;
  const colLength = board[0].length;

  // 열을 좌에서 우로,
  for (let col = 0; col < colLength; col++) {
    const temp = [];
    // 행을 아래에서 위로 순회하면서
    for (let row = rowLength - 1; row >= 0; row--) {
      // 해당 위치의 값이 0이라면 다음 값들도 0이므로 해당 행의 탐색을 끝낸다.
      if (board[row][col] === 0) break;
      // 0이 아니라면 임시 배열에 넣고
      temp.push(board[row][col]);
    }
    console.log(temp);
    // 임시 배열을 정제된 보드 배열에 넣는다.
    refinedBoard.push(temp);
  }

  return refinedBoard;
}

/**
 * 주어진 퍼즐판을 조작에 따라 진행해서 나온 점수를 반환하는 함수
 * @param {number[][]} board 퍼즐판
 * @param {number[]} moves 조작
 * @returns {number} 점수
 */
function play(board, moves) {
  // 주어진 퍼즐판에서 0을 제거하고
  // 같은 열의 값들이 행으로 묶인 정제된 퍼즐판으로 만든다.
  const refinedBoard = refineBoard(board);
  console.log(`정제된 퍼즐판${refinedBoard}`);
  // 퍼즐판에서 집은 퍼즐들을 쌓아둘 스택을 만든다.
  const stack = [];
  // 점수를 0으로 초기화한다.
  let score = 0;

  // 움직임을 하나씩 순회하면서
  for (const move of moves) {
    // 움직임에 해당하는 행을 찾고
    const targetRow = refinedBoard[move - 1];
    console.log(targetRow);
    // 해당 행이 비어있으면
    if (targetRow.length === 0) {
      // 점수에서 1을 감소시키고 다음 움직임을 시행한다.
      score -= 1;
      continue;
    }

    // 비어있는 행이 아니라면 마지막 퍼즐을 하나 선택해서 522 순서지만 pop을 사용해서 뒤 2부터 나가게 됨..천재다 진좌 ..
    const targetPuzzle = targetRow.pop();
    // 스택의 마지막 퍼즐과 집은 퍼즐이 일치한다면
    if (stack.at(-1) === targetPuzzle) {
      // 퍼즐의 2배를 점수로 추가하고
      score += targetPuzzle * 2;
      // 스택에서 해당 퍼즐을 제거한다.
      stack.pop();
    } else {
      // 일치하지 않는다면 퍼즐을 스택에 넣는다.
      stack.push(targetPuzzle);
    }
  }

  return score;
}

const board = [
  [0, 0, 0, 0],
  [0, 1, 0, 3],
  [2, 5, 0, 1],
  [2, 4, 4, 1],
  [5, 1, 1, 1],
];
const moves = [1, 1, 1, 1, 3, 3, 3];
