//새 학기를 맞아 호준이네 반장 선거를 하기로 했습니다. 그런데 표를 하나씩 개표하는 과정이 너무 번거롭게 느껴진 당신은 학생들이 뽑은 후보들을 입력받으면 뽑힌 학생의 이름과 받은 표 수를 출력하는 프로그램을 작성하기로 했습니다.

//입력 : 원범 원범 혜원 혜원 혜원 유진 유진

//출력 : 혜원이가 4표로 총 반장이 되었다.

const array = ["원범", "원범", "혜원", "혜원", "혜원", "유진", "유진"];

const result = {};
const winner = "";

for (let index in array) {
  let val = array[index];
  //원범이가 일단 첫번째로 여기 들어가게 된다.
  result[val] = result[val] === undefined ? 1 : (result[val] = result[val] + 1);
}

//{원범: undefined} => 1이 된다. 그러고 다음번에 나와서 undefined가 아니면 그 다음엔 +1이 된다.

console.log(Object.keys(result));

winner = Object.keys(result).reduce(function (a, b) {
  console.log(a, b);
  return result[a] > result[b] ? a : b;
});

console.log(winner);

//Object.keys() 메소드는 주어진 객체의 속성 이름들을 일반적인 반복문과 동일한 순서로 순회되는 열거할 수 있는 배열로 반환한다.
//reduce 함수 매우 어렵네...
//배열.reduce((누적값, 현잿값, 인덱스, 요소) => { return 결과 }, 초깃값);
