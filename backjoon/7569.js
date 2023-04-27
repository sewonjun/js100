let fs = require("fs");
const { totalmem } = require("os");
const filePath = process.platform === "linux" ? "./dev/stdin" : "예제.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

//위 -> 전체 배열에서 + N;
//아래 -> 전체 배열에서 - N;
//왼쪽 -> 같은 줄 index - 1;
//오른쪽 -> 같은 줄 index + 1;
//앞 -> 전체 배열에서 - 1 같은 index;
//뒤 -> 전체 배열에서 + 1 같은 index;

const [M, N, H] = input[0].split(" ").map((el) => Number(el));
input = input.slice(1).map((arr) => arr.split(" ").map((el) => Number(el)));

let tomatoBox = [...input];
// for (let i = 0; i < input.length; i += N) {
//   let oneBox = input.slice(i, i + N);
//   tomatoBox.push(oneBox);
// }

function solution() {
  let redTomatoArr = [];
  for (let i = 0; i < tomatoBox.length; i++) {
    if (tomatoBox[i].includes(1)) {
      const redTotmatoIdx = tomatoBox[i].indexOf(1); //  한줄에 두개씩 있으면 어칼라고 .. indexOf를 썼니..?
      redTomatoArr.push([i, redTotmatoIdx]);
    }
  }
  console.log(redTomatoArr);
  redTomatoArr.forEach((el) => {
    const [i, redTotmatoIdx] = el;

    const up = [i + N, redTotmatoIdx];
    const down = [i - N, redTotmatoIdx];
    const left = [i, redTotmatoIdx - 1];
    const right = [i, redTotmatoIdx + 1];
    const front = [i - 1, redTotmatoIdx];
    const back = [i + 1, redTotmatoIdx];

    if (verifyIndex(up)) {
      tomatoBox[i + N][redTotmatoIdx] = 1;
    }

    if (verifyIndex(down)) {
      tomatoBox[i - N][redTotmatoIdx] = 1;
    }

    if (verifyIndex(left)) {
      tomatoBox[i][redTotmatoIdx - 1] = 1;
    }

    if (verifyIndex(right)) {
      tomatoBox[i][redTotmatoIdx + 1] = 1;
    }

    if (verifyIndex(front)) {
      tomatoBox[i - 1][redTotmatoIdx] = 1;
    }

    if (verifyIndex(back)) {
      tomatoBox[i + 1][redTotmatoIdx] = 1;
    }
  });
}
solution();

function verifyIndex([i, j]) {
  if (i < 0 || j < 0 || i >= N * H || j >= M) {
    return false;
  }
  return true;
}

console.log(tomatoBox);
