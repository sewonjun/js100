//원의 넓이는 반지름의 길이 * 반지름의 길이 * 3.14로 구할 수 있다.
//함수를 사용하여 원의 넓이를 구하는 코드를 작서해보자.

//입력으로 반지름 길이 정수 n이 주어지면 원의 넓이를 반화하는 함수를 만들어라.

//내 답
var circle = Number(propmt("insert radius"));

var circulCircle = console.log(circle * circle * 3.14);

//모범답안
function circleWidth(n) {
  return n * n * 3.14;
}

console.log(circleWidth(5));
