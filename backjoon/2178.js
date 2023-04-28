let fs = require("fs");
const filePath = process.platform === "linux" ? "./dev/stdin" : "예제.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input[0];

const maze = input.splice(1).map((el) => {
  return el.split("").map((el) => Number(el));
});
const visitedMaze = maze.map((arr) => {
  return arr.map((el) => {
    return el === 0 ? true : false;
  });
});

console.log(visitedMaze);
function solution() {
  //우선순위가 옆, 아래, 위, 오른쪽..
  let n = 0;
  let m = 0;
  let queue = []; //큐를 돌면서 그때서야 vistied 처리를 해주는게 맞을듯..
  let down = [1, 0];
  let right = [0, 1];
  let up = [-1, 0];
  let left = [0, -1];

  visitedMaze[n][m] = true;

  if(n + 1 >= 0 && n + 1 < N && m >=0 && m < M )
}
