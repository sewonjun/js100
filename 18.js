//영하네 반은 국어, 수학, 영어 시험을 보았다. 영하는 친구들의 평균 점수를 구해주기로 했다. 
//공백으로 구분하여 세 과목의 점수가 주어지면 전체 평균 점수를 구하는 프로그램을 작성해라 

// const score = ["70", "82", "95"];
const score = prompt().split("");
let sum = 0;

for(let i = 0; i < score.length; i++){
    sum = sum + parseInt(score[i],10);
}

console.log(Math.floor(sum/score.length));