//1부터 20까지의(20을 포함) 모든 숫자를 일렬로 놓고 모든 자릿수의 총 합을 구하세요.

// 내 답안
let array1 = [];

for (let i = 1; i <= 20; i++) {
  array1.push(i);
}

console.log(array1);

let array2 = array1.join("");

let array3 = array2.split("");

let result = 0;
for (let i = 0; i < array3.length; i++) {
  result = result + Number(array3[i]);
  console.log(result);
}

//선생님 답안
let arr = [];
let sum = 0;
for (let i = 0; i < 20; i++) {
  arr[i] = i + 1;
}

arr.forEach((n) => {
  while (n !== 0) {
    sum += n % 10;
    n = Math.floor(n / 10);
  }
});

console.log(sum);
