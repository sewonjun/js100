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

//편한데.. 이렇게 해도 괜찮은지 모르겠음. json 형식으로 바꿔서 비교하는데 순서대로 비교하기 때문에 틀리지는 않을듯    
console.log(`verifyNums:${verifyNums}`);
console.log(JSON.stringify(verifyNums) == JSON.stringify(sortNum));


//하나씩 비교하기 
for(i=0;  i<sortNum.length; i++ ){
  if(sortNum[i]!==verifyNums[i]){
    console.log("false")
  } else {
    console.log("true")
  }
}

//답안
function sol(l) {
  l.sort((a, b) => {
    return a - b;
  });

  for (let i = 0; i < l.length - 1; i++) {
    console.log(l[i] l[i + 1]);
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
//이거 답 아닌것 같다 ㅠㅠ 근데 왜인지 모름.. ㅎ
