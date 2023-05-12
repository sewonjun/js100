let fs = require("fs");
const filePath = process.platform === "linux" ? "./dev/stdin" : "예제.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const [N, K] = input[0].split(" ");

// let itemList = input.slice(1).map((arr) => {
//   return arr.split(" ").map((el) => Number(el));
// });

// const temp = [];
// //함수를 만들어서, 남은 N, K, 그리고 restItem을 넘겨준다.
// function backpack(leftN, leftK, restItem) {}
// for (let i = 0; i < N; i++) {
//   const [w, v] = itemList[i];
//   let tempK = K - w; // 가장 처음 선택되는 아이템을 뺀 나머지 무게
//   let restItem = [...itemList.slice(i + 1)];
//   backpack()
// }
// console.log(temp);

//춘구님 코드
const [MAX_COUNT, MAX_LIMIT] = input[0].split(" ").map(Number);
const items = input.slice(1).map((e) => e.split(" ").map(Number));
items.unshift([0, 0]);
console.log(items);

const DP = new Array(MAX_COUNT + 1).fill(new Array(MAX_LIMIT + 1).fill(0));

for (let count = 1; count <= MAX_COUNT; count += 1) {
  const [weight, value] = items[count];
  console.log(items[count - 1]); //

  for (let limit = 0; limit <= MAX_LIMIT; limit += 1) {
    if (limit < weight) DP[count][limit] = DP[count - 1][limit];
    else
      DP[count][limit] = Math.max(
        DP[count - 1][limit],
        DP[count - 1][limit - weight] + value
      );
    // console.log("DP", DP);
  }
}
console.log(DP[MAX_COUNT][MAX_LIMIT]);
