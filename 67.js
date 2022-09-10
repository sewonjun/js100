function solution(n) {
  let 사람 = 0;
  let 총악수 = 0;
  let temp = 0;
  while (true) {
    총악수 = parseInt(((사람 * (사람 - 1)) / 2, 10));
    if (n < 총악수) {
      break;
    }
    temp = 총악수;
    사람 += 1;
  }
  return [parseInt(n - temp, 10), 사람];
}

const 악수의수 = 59;
console.log(solution(악수의수));

//내 풀이
let 총악수 = parseInt(54, 10);
let result = [];
for (i = 1; i++; ) {
  let 악수 = (i * i - 1) / 2;
  if (총악수 < 악수) {
    break;
  } else {
    result = i;
  }
}

let 사람의수 = result;
let 민규악수 = 총악수 - (사람의수 * (사람의수 - 1)) / 2;
console.log(민규악수, 사람의수 + 1);
