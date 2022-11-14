//2020년 1월 1일은 수요일이다. 2020년 a월 b일은 무슨 요일일까요?
// 두 수 a, b를 입력받아 2020년 a월 b일이 무슨 요일인지 리턴하는 함수 solution을 완성하세요.
//요일의 이름은 일요일부터 토요일까지 각각 SUN, MON, TUE, WED, THU, FRI, SAT입니다.
//예를 들어 a=5, b=24라면 일요일이므로 문자열 'SUN'를 반환하세요.

const month = prompt("insert month") - 1;
const day = prompt("insert day");

function solution(a, b) {
  const day = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const x = new Date(2020, a, b);
  console.log(x);
  return day[x.getDay()];
}
console.log(solution(month, day));
