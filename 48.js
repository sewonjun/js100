//문자열이 주어지면 대문자와 소문자를 바꿔서 출력하는 프로그램을 출력하시오.

//내 풀이
const val1 = "AAABBBcccddd";

let val2 = val1.split("");
console.log(val2);

let val3 = [];
for (i = 0; i < val2.length; i++) {
  if (val2[i] === val2[i].toUpperCase()) {
    val3.push(val2[i].toLowerCase());
  } else {
    val3.push(val2[i].toUpperCase());
  }
}

console.log(val3.join(""));

//선생님 풀이
let a = prompt("insert something");
let b = [];
let s = "";

for (let i = 0; i < a.length; i++) {
  if (a[i] === a[i].toLowerCase()) {
    b.push(a[i].toUpperCase());
  } else {
    b.push(a[i].toLowerCase());
  }
}

for (let j = 0; j < b.length; j++) {
  s = s + b[j];
}

console.log(s);
