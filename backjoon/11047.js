let fs = require('fs');
const filePath = process.platform === "linux" ? "./dev/stdin" : "예제.txt"
let input =
fs.readFileSync(filePath)
.toString()
.trim()
.split('\n');


const [N, K] = input[0].split(" ").map(el => Number(el)); // N은 종류, K는 만들어야 하는 돈
const unitsOfMoney = input.slice(1).map((el) => Number(el)).reverse();

function solution() {
  let leftMoney = K;
  let moneyCount = 0;
  let currentUnit = 0;
  while(leftMoney !== 0){
    for (let i = currentUnit; i < N; i++){
      if(leftMoney >= unitsOfMoney[i]){
        currentUnit = i+1;
        const amountOfUnit = Math.floor(leftMoney / unitsOfMoney[i]);
        moneyCount += amountOfUnit;
        leftMoney = leftMoney - (unitsOfMoney[i] * amountOfUnit);
        break;
      }
    }
  }

  return moneyCount;
}


console.log(solution());
