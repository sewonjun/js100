//답안
function solution(n) {
  let answer = "1";

  if (n === 1) {
    return 1;
  }

  for (let i = 1; i < n; i++) {
    answer = rule(answer);
  }

  return answer;
}

function rule(answer) {
  let answerMax = 9;
  let result = "";

  for (let i = 1; i <= answerMax; i++) {
    let re = new RegExp(i, "g");
    let count = (answer.match(re) || []).length;

    if (count >= 1) {
      result = result + String(i) + String(count);
    }
  }
  return result;
}

const user_input = 3;
console.log(solution(user_input));
