//총 문자열의 길이는 50으로 제한하고 사용지기 문자열을 입력하면 그 문자열을 가운데 정렬하고, 나머지 빈 부분에는 '='을 채워 넣으시오.

//조건
//1 . 먼저 50자로 문자열 길이를 제한 시키고
//2 . 홀수일 경우 가운데 정렬을 생각하자
//3 . 빈칸을 =으로 채울 식을 만들자.
const string = prompt("insert some words");
let l = string.length;
console.log(l);
function verifyString(n) {
  if (l > 50) {
    alert("you inserted over 50 letters");
    // return false;
  } else {
    // alert("true");
    return true;
  }
}

if (verifyString() === true) {
  let divString = Math.floor((50 - l) / 2);
  console.log(divString);
  let fullSentence1 = string.padStart(divString + l, "=");
  let fullSentence2 = fullSentence1.padEnd(50, "=");
  console.log(fullSentence2);
}

verifyString(string);

//답안
const str = prompt("문자열을 입력해주세요.");

const n = 25 + parseInt(str.length / 2, 10);
console.log(n);
//왼쪽부터 채우기
const a = str.padStart(n, "=");
console.log(a);
//오른쪽까지 채워서 출력
console.log(a.padEnd(50, "="));
