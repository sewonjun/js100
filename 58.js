//숫자를 입력 받고 천단위로 콤마를 찍어주시오.
const n = prompt("insert number");
parseInt(n, 10);

const divideN = n / 3;
const remainderN = n % 3;
if (remainderN !== 0) {
  let a = n.slice(remainderN) + ",";
  console.log(a);
}

for (let i = 1; i < divideN; i++) {
  if (i === 1) {
    let a = n.slice(remainderN, remainderN + 3) + ",";
    let b = n.slice(remainderN + 3, remainder + 6);
    return a;
  }
}
