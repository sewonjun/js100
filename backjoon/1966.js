let fs = require('fs');
let input = fs.readFileSync("예제.txt").toString().trim().split('\n');
///dev/stdin

const testNumber = input[0];
const testCase = input.slice(1).map(el => el.trim().split(" "));

for (let i = 0; i < testCase.length; i+=2) {
  const [queueLength, question] = testCase[i].map(el => Number(el));
  const queue = testCase[i+1].map(el => Number(el));
  let numberedQueue = []; // 인덱스랑 숫자랑 같이 있는 배열
  let tempQueue = [];
  for (let i = 0; i < queue.length; i++) {
    numberedQueue.push([i, queue[i]]);
  }
  function verifyNumber(currentNumber){
    const answer = numberedQueue.map(el => {
      if (el[1] > currentNumber) {
        return false;
      } else {
        return true;
      }
    })
    return answer
  }
  // while(numberedQueue.length){
    for (let i = 0; i < numberedQueue.length; i++) {
      const currentNumber = numberedQueue[i];
      numberedQueue = numberedQueue.slice(i+1);
      const verified = verifyNumber(currentNumber[1], queue);
      console.log(verified);
    }
  // }
}
