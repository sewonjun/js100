//사용자가 입려한 양의 정수의 각 자릿수의 합을 구하는 프로그램을 만들어주세요.

//내 답안
let var1 = "18234";

var2 = var1.split("");

console.log(var2);

let totalval = 0;

for (let i = 0; i < var2.length; i++) {
  totalval = totalval + Number(var2[i]);
  console.log(totalval);
}

//다른버전 답안
let n = prompt("숫자를 입력하세요");
let sum = 0;

while (n !== 0) {
  sum += n % 10;
  n = Math.floor(n / 10);
}

console.log(sum);
