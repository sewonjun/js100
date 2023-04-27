let fs = require("fs");
const filePath = process.platform === "linux" ? "./dev/stdin" : "예제.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [M, N] = input[0].split(" ").map((el) => Number(el));

let tomatoArr = input.splice(1).map((oneLine) => {
  const oneArr = oneLine.split(" ").map((el) => Number(el));
  return oneArr;
});

let visitedTomato = tomatoArr.map((oneLine) => {
  const visitedLine = oneLine.map((el) => {
    return el === -1 ? true : false;
  });

  return visitedLine;
});

function makeRedTomato() {
  let count = -1;
  let redTotmatoIdxs = [];
  //초기에 1 값 찾기
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (tomatoArr[i][j] === 1 && visitedTomato[i][j] === false) {
        redTotmatoIdxs.push([i, j]);
        visitedTomato[i][j] = true;
      }
    }
  }
  while (redTotmatoIdxs.length) {
    let redTotmatoIdxsTemp = [];
    redTotmatoIdxs.forEach(([i, j]) => {
      visitedTomato[i][j] = true;
      const front = [i - 1, j];
      const back = [i + 1, j];
      const left = [i, j - 1];
      const right = [i, j + 1];

      if (validateIdx(...front) && visitedTomato[i - 1][j] === false) {
        tomatoArr[i - 1][j] = 1;
        redTotmatoIdxsTemp.push(front);
      }

      if (validateIdx(...back) && visitedTomato[i + 1][j] === false) {
        tomatoArr[i + 1][j] = 1;
        redTotmatoIdxsTemp.push(back);
      }

      if (validateIdx(...left) && visitedTomato[i][j - 1] === false) {
        tomatoArr[i][j - 1] = 1;
        redTotmatoIdxsTemp.push(left);
      }

      if (validateIdx(...right) && visitedTomato[i][j + 1] === false) {
        tomatoArr[i][j + 1] = 1;
        redTotmatoIdxsTemp.push(right);
      }
    });

    redTotmatoIdxs = [...redTotmatoIdxsTemp];
    count++;
  }

  return count;
}

function validateIdx(i, j) {
  if (i < 0 || j < 0 || i >= N || j >= M) {
    return false;
  }

  return true;
}

console.log(makeRedTomato());
