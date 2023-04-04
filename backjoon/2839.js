let fs = require('fs');
const { machine } = require('os');
let input =
fs.readFileSync("예제.txt")
.toString()
.trim()
.split('\n');
///dev/stdin

function solution() {
  const weight = Number(input);
  let baggageMount = [];

  if (weight < 5) {;
    if (weight % 3 !== 0) {
      return -1;
    } else {
      return Math.floor(weight / 3);
    }
  } else {
    let maxFiveAble = Math.floor(weight / 5);
    for (let i = 0; i <= maxFiveAble; i++) {
      let leftWeight = weight - (5 * i);

      if(leftWeight % 3 !== 0){
        baggageMount.push(-1);
      } else {
        baggageMount.push(i + Math.floor(leftWeight / 3));
      }
    }
  }
  const ableAnswers = baggageMount.filter(el => el !== -1);

  if(!ableAnswers.length){
    return -1
  } else {
    return Math.min(...ableAnswers)
  }
}


console.log(solution());
