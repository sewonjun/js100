//1~3위까지 사탕 주기로 했다. 1~3위 학생이 여러명일 수 있고 1~3위 학생 중 중복되는 학생까지 포함하여 사탕을 사기로 했다. 학생들의 점수를 공백으로 구분하여 입력을 받고 사탕을 받을 학생의 수를 출력하라.
var scores = "97 86  86 86 75 66 55 97 85 97 97 95";

var orderScore = scores.split(" ").sort(function (a, b) {
  return a - b;
});

console.log(orderScore);

let top3 = [];
let count = 0;

while (top3.length <= 3) {
  let value = orderScore.pop();
  if (!top3.includes(value)) {
    top3.push(value);
  }
  count++;
}

console.log(top3);
console.log(count - 1);
// top3의 길이가 3이 되는 순간 반복문이 멈추게 되는데 그럼 3등이 여러명이여도 세지지 않느다. 고로 4가 되면 반복문이 종료되도록 하고 -1을 하면 답을 구할 수 있다.
