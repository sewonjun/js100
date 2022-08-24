//다음의 객체가 주어졌을 때 한국의 면접과 가장 비슷한 국가와 그 차이를 출력하시오.

const nationWidth = {
  korea: 220877,
  Rusia: 17098242,
  China: 9596961,
  France: 543965,
  Japan: 377915,
  England: 242900,
};

const w = nationWidth["korea"];
delete nationWidth["korea"];
const entry = Object.entries(nationWidth);
console.log(entry);
//entry 키값이랑 벨류값 둘 다 배열로 넘겨줌
const values = Object.values(nationWidth);
console.log(values);

let gap = Math.max.apply(null, values);
let item = [];

for (let i in entry) {
  if (gap > Math.abs(entry[i][1] - w)) {
    gap = Math.abs(entry[i][1] - w);
    item = entry[i];
  }
}
//Math.abs() 함수는 주어진 숫자의 절댓값을 반환한다. X가 음수인 경우에는 X의 반대값, 양수를 반환한다.
console.log(item[0], item[1] - w);
