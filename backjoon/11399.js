let fs = require('fs');
const filePath = process.platform === "linux" ? "./dev/stdin" : "예제.txt"
let input =
fs.readFileSync(filePath)
.toString()
.trim()
.split('\n');

const [N, ...P] = input //  5 [ '3 1 4 3 2' ]

function solution() {
  const waitingTimeArray = P[0].split(" ").map(el => Number(el)).sort((a, b) => a- b);
  const people = Number(N);
  let totalWaitingTime = 0;
  let currentWaitingTime = 0;

  for(let  i = 0; i < people; i++) {
    currentWaitingTime = currentWaitingTime + waitingTimeArray[i];
    totalWaitingTime += currentWaitingTime;
  }

  return totalWaitingTime;
}

console.log(solution());
