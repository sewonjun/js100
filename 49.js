//순서가 없는 10개의 숫자가 공백으로 구분되어 주어진다. 주어진 숫자들 중 최댓값을 반환하라.

//내답
const val1 = "10 9 8 7 6 5 4 3 2 1";

let val2 = val1.split(" ");

console.log(val2);

val2.sort(function (a, b) {
  return a - b;
});
console.log(val2);
console.log(val2.pop());

//답안
let numbers = prompt("10개의 숫자를 입력하시오.")
  .split(" ")
  .map((n) => {
    return parseInt(n, 10);
  });

numbers.sort((a, b) => {
  return b - a;
});

console.log(numbers[0]);
