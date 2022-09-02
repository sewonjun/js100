//이름 가나다 순서대로 배정하고 번호 매기기
//데이터에 입력된 이름을 아래와 같이 출력하시오.

const students = [
  "강은지",
  "김유정",
  "박현서",
  "최성훈",
  "홍유진",
  "박지호",
  "권윤일",
  "김채리",
  "한지호",
  "김진이",
  "김민호",
  "강채연",
];

students.sort();

for (let key in students) {
  console.log(`번호 ${parseInt(key, 10) + 1}, 이름:${students[key]}`);
}
