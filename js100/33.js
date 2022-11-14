//한줄에 여러개의 숫자가 입력되면, 역순으로 그 숫자들을 하나씩 출력하는 프로그램을 작성하시오.
var ex1 = [1, 2, 3, 4, 5];
console.log(ex1.reverse());

//.reverse() 배열을 역순으로 배치시켜줌

// 재현님 답

const nums = "1 2 3 4 5";
const arr = nums.split(" ").reverse();
console.log(arr);
let reverseVal = "";
for (let i = 0; i < arr.length; i++) {
  reverseVal = reverseVal + arr[i];
}

console.log(reverseVal);
