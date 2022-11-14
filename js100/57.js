//내 방법
let nums = "";

for (let i = 0; i <= 1000; i++) {
  nums += i;
}

console.log(typeof nums);
let count = 0;
for (let a of nums) {
  if (a == 1) {
    count++;
  }
}
console.log(count);

//1번 방법

const obj = {};
for (i = 0; i <= 1000; i++) {
  let tmp = i;
  while (tmp > 0) {
    let num = tmp % 10;
    if (obj[num]) {
      console.log(obj[num]);
      obj[num]++;
    } else {
      obj[num] = 1;
    }
    tmp = parseInt(tmp / 10, 10);
  }
}

console.log(obj[1]);
