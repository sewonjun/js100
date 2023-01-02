function solution(n, a, b) {
  var answer = 0;
  const distance = b - a;
  for (let i = 1; i < 20; i++) {
    if (Math.pow(2, i) < distance <= Math.pow(2, i + 1)) {
      answer += i + 1;
      break;
    }
  }
  return answer + 1;
}

console.log(solution(8, 4, 7));
