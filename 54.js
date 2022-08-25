//숫자가 공백으로 구분되어 주어지면 이 숫자가 연속수인지 아닌지 "YES"와 "NO"로 판별하는 프로그램을 작성하시오.

//내 풀이
let continuousNum = prompt("insert continous number")
  .split("")
  .map((continuousNum) => parseInt(continuousNum, 10));

console.log(`continuousNum: ${continuousNum}`);

let sortNum = "";

sortNum = continuousNum.sort(function (a, b) {
  return a - b;
});

console.log(`sortNum:${sortNum} `);

let verifyNums = [];
// for (i = sortNum[0]; i <= sortNum.length; i++)
//이렇게 하면 i가 2면 반복횟수가 이상해진다!! 정신차리자
for (i = 0; i <= sortNum.length - 1; i++) {
  let first = sortNum[0];
  verifyNums.push(parseInt(first + i, 10));
}

console.log(`verifyNums:${verifyNums}`);
console.log(JSON.stringify(verifyNums) == JSON.stringify(sortNum));

//답안
function sol(l) {
  l.sort((a, b) => {
    return a - b;
  });

  for (let i = 0; i < l.length - 1; i++) {
    if (l[i] + 1 !== l[i + 1]) {
      return "No";
    }
  }
  return "YES";
}

const n = prompt("입력해주세요")
  .split(" ")
  .map((n) => parseInt(n, 10));

console.log(sol(n));
