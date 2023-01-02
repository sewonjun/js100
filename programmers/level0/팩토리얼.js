function solution(n) {
  var answer = 0;
  const ableNumbers = [];
  let temp = 1;
  let k = 1;
  for (let i = 1; i <= k; i++) {
    temp *= i;
    if (temp <= n) {
      ableNumbers.push(temp);
      k++;
    } else {
      break;
    }
  }
  answer = ableNumbers.length;

  return answer;
}
