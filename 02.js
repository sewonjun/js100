//<pass>부분에 배열 내장함수를 이용하여 코드를 입력하고 다음과 같이 출력하세요
var arr = [200, 100, 300];
//pass

//방법 1 
arr.splice(2, 1, 1000, 300);
console.log(arr);

//방법 2
arr.pop();
var newNums = arr.concat(10000, 300)
console.log(newNums);

//모법답안 
arr.splice(2, 0, 10000);
//출력 
// [200,100, 10000, 300]