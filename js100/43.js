//사용자에게 숫자를 입력받고 이를 2진수로 바꾸고 그 값을 출력해주세요.

// while(i){
//     alert(i);
//     i--;
// }
// 이 상황에서 while반복문은 i가 0이 되면 falsy로 판단돼 반복문을 멈춘다.

//버전1
let num = "32";
let arrayNum = [];

while (num) {
  arrayNum.push(num % 2);
  num = Math.floor(num / 2);
}

console.log(arrayNum.reverse().join(""));

//버전2
//let num = 160;
//console.log(num.toString(2));
