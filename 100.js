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
