let fs = require("fs");
const { connect } = require("net");
const { compileFunction } = require("vm");
const filePath = process.platform === "linux" ? "./dev/stdin" : "예제.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
let connectedElement = input.slice(1).map((el) => el.split(" ").map(Number));
// console.log(connectedElement);
//재귀써라..
let count = 0;
if (!connectedElement.length) {
  answer = 1;
} else {
  while (connectedElement.length) {
    const el = connectedElement[0][0];
    verifyConnected(el);
    count += 1;
  }
}
function verifyConnected(num) {
  const componentTemp = [];
  connectedElement.forEach((connected) => {
    if (connected.includes(num)) {
      componentTemp.push(...connected);
    }
  });
  connectedElement = connectedElement.filter((arr) => {
    if (!componentTemp.includes(arr[0]) || !componentTemp.includes(arr[1])) {
      // console.log("필터중", arr);
      return arr;
    }
  });

  // console.log("필터후", connectedElement);
  connectedElement.forEach((arr) => {
    if (componentTemp.includes(arr[0])) {
      verifyConnected(arr[0]);
    }

    if (componentTemp.includes(arr[1])) {
      verifyConnected(arr[1]);
    }
  });
}

console.log(count);
