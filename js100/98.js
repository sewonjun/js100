const input = "1번: 3,1 2번: 4 3번: 2,1,3 4번: 2,1,3,4";

//숫자만 추출 정규표현식 사용
let splitInput = input.split(" ");
console.log(splitInput);
let array1 = "";
for (i = 0; i < splitInput.length; i++) {
  if (i % 2 === 1) {
    array1 += splitInput[i];
  }
}
console.log(array1);
const regex = /[^0-9]/g;
const array2 = array1.replace(regex, "");
console.log(array2);

// 답 도출
const set = new Set(array2);
const newArr = [...set];
console.log(newArr);
