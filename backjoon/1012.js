let fs = require('fs');
const filePath = process.platform === "linux" ? "./dev/stdin" : "예제.txt"
let input =
fs.readFileSync(filePath)
.toString()
.trim()
.split('\n');

const questionNumber = input[0];
const eachTestCase = [];
const divideQuestion = input.slice(1).map(el => el.split(" "));
// console.log(eachTestCase);
divideQuestion.forEach(el => {
  if(el.length === 3){
    eachTestCase.push([el]);
  } else {
    eachTestCase.at(-1).push(el);
  }
});
eachTestCase.forEach( (array) => {
    const [M, N, K] = array[0].map(el => Number(el));
    const cabbageCoordinate = array.slice(1).map(arr => arr.map(el => Number(el)));
    const farmWidth = new Array(N).fill(0);
    let farm = Array.from(farmWidth, x => new Array(M).fill(0));

    cabbageCoordinate.forEach(arr => {
      const [m, n] = arr;
      farm[n][m] = 1;
    })
    console.table(farm);
  }
)
