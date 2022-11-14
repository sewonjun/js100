//소수를 구하는 코드
let prime = [];
let isPrime = true;
let val = 100;
let 골드바흐파티션 = [];

for (let i = 2; i < val; i++) {
  for (let j = 2; j < i; j++) {
    if (i % j == 0) {
      isPrime = false;
    }
  }
  if (isPrime) {
    prime.push(i);
  }
  isPrime = true;
}

console.log(prime);

//소수 목록에서 짝을 찾는 과정
for (let n of prime) {
  //중복되는 배열을 막으려고 && 연산자 사용
  if (prime.includes(val - n) && n <= val - n) {
    골드바흐파티션.push([n, val - n]);
  }
}

//가장 큰 차와 가장 작은 차를 구하는 코드
let 차 = 골드바흐파티션.map((el) => el[1] - el[0]);
let 작은값 = 골드바흐파티션[차.indexOf(Math.min.apply(null, 차))];
let 큰값 = 골드바흐파티션[차.indexOf(Math.max.apply(null, 차))];

console.log(골드바흐파티션);
console.log(차);
console.log(큰값);
console.log(작은값);
