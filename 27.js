// 첫번째 입력에서는 학생의 이름이 공백으로 구분되어 입력되고, 두번째에는 그  학생의 수학 점수가 공백으로 구분되어 주어진다.

// 두 개를 합쳐 학생의 이름이 key이고 value가 수학점수인 객체를 출력하시오.

//내가 생각해낸 답.. 정도
var named = "Yujin Hyewon".split(" ");
console.log(named);

var score = "70 100".split(" ");

let obj = {};

//마지막에 for문을 쓸 생각을 못함..

//모범답안

const keys = prompt().split(" ");
const values = prompt().split(" ");
let obj = {};

for (let i = 0; i < keys.length; i++) {
  obj[keys[i]] = [values[i]];
}
console.log(obj);
