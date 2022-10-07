let student_score = [];
let class_score = [];
let total_score = [];

for (let k = 0; k < 7; k++) {
  class_score = [];
  for (let j = 0; j < 30; j++) {
    //student_score를 빈배열로 초기화하고 안하고 차이점 정리하기..
    student_score = [];
    for (let i = 0; i < 5; i++) {
      student_score.push(Math.floor(Math.random() * 100) + 1);
    }
    class_score.push(student_score);
  }
  total_score.push(class_score);
}

let class_average = [];
for (let c of total_score) {
  let class_sum = 0;
  console.log(`각반의 학생들 점수 리스트${c}`); // 각 반의 학생들 점수 리스트
  let individual_average = []; //개개인의 평균
  for (s of c) {
    let sum = 0;
    for (let i = 0; i < s.length; i++) {
      sum += s[i];
    }
    individual_average.push(Math.floor(sum / 5));
  }
  console.log(`각 학생 개개인의 평균 리스트${individual_average}`); // 각 학생들의 평균 리스트
  console.log(`반 1등의 점수 ${Math.max(...individual_average)}`);
  for (q of individual_average) {
    class_sum += q;
  }
  class_average.push(Math.floor(class_sum / c.length));
}
console.log(`각반의 평균 리스트${class_average}`); // 반평균 리스트

let total_average = 0; //전체평균
for (a of class_average) {
  total_average += a;
}

console.log(`전교 평균${Math.floor(total_average / 7)}`);
