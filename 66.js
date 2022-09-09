const 전체블록 = ["ABCDEF", "BCAD", "ADEFQRX", "BEDFG", "AEBFDGCH"];
const 규칙 = "ABCD";

function solution(전체블록, 규칙) {
  let answer = [];
  for (let 부분블록 of 전체블록) {
    answer.push(블록순서체크(부분블록, 규칙));
  }
  return answer;
}

function 블록순서체크(부분블록, 규칙) {
  //배열에서 지정된 요소를 찾고 찾을 수 있는 첫번째 인덱스 반환. 존재하지 않으면 -1 반환 -> 이것 때문에 밑에 18번째 줄 조건이 만족될수 있음.
  let 임시변수 = 규칙.indexOf(규칙[0]);
  console.log(임시변수); // 0이 계쏙 나온단 말임
  for (let 문자 of 부분블록) {
    if (규칙.includes(문자)) {
      if (임시변수 > 규칙.indexOf(문자)) {
        return "불가능";
      }
      임시변수 = 규칙.indexOf(문자);
    }
  }
  return 가능;
}

console.log(solution(전체블록, 규칙));
