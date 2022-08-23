//공백으로 구분하여 두  숫자 a와 b가 주어지면, a의 b승을 구하는 프로그램을 작성하세요 ~~

//내 답
var math = prompt("insert something");

var mathSplit = math.split("");
// console.log(mathSplit);

// console.log(mathSplit[0]);

var multiple = mathSplit[0] ** mathSplit[1];

console.log(multiple);

//모범답
const num = prompt().split("");

console.log(Math.pow(parseInt(num[0], 10), parseInt(num[1], 10)));

//Math.pow => 제곱 시켜주는 함수. 첫번째 매개변수가 base가 되고 두번째를 exponent로 받아들여 제곱한다.

// 항상 정수가 나와야 하는 식은 parseInt 써주자.
