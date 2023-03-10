let fs = require('fs');
let input = fs.readFileSync("예제.txt").toString().trim().split('\n');
let city = input[0];
let distances = input[1].split(" ").map((element) => {return Number(element)});
let fuelPrices = input[2].split(" ").slice(0, -1).map((element) => {return Number(element)});

function solution () {
  let answer = 0;
  let distanceCopy = [...distances];
  let fuelPricesCopy = [...fuelPrices];
  while(distanceCopy.length){
    let bestPrice = Math.min(...fuelPricesCopy);
    let indexOfBestPrice = fuelPrices.indexOf(bestPrice);
    let bestPriceDistance = distanceCopy.slice(indexOfBestPrice);
    let price =  bestPriceDistance.reduce((a, b) => a + b, 0);
    answer += (price * bestPrice);
    fuelPricesCopy.splice(indexOfBestPrice);
    distanceCopy.splice(indexOfBestPrice);
    console.log(bestPrice, distanceCopy, fuelPricesCopy);
  }
  return answer;
}

console.log(solution());

//7
// 3 2 4 4 5 2
// 3 4git  2 3 1 3 2

