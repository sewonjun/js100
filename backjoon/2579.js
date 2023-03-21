let fs = require('fs');
let input = fs.readFileSync("예제.txt").toString().trim().split('\n').map(el => Number(el));
///dev/stdin

const [count, ...scores] = input;

const dp = new Array(count).fill(0);

dp[0] = scores[0];
dp[1] = scores[0] + scores[1];
dp[2] = Math.max(scores[0], scores[1]) + scores[2];

for (let i = 3; i < count; i += 1) {
  dp[i] = Math.max(
    dp[i - 3] + scores[i - 1] + scores[i],
    dp[i - 2] + scores[i]
  );
}
console.log(dp);
console.log(dp[count - 1]);

//dp 는 동적 계획법.. 전에 썼던 값을 다시 활용한다는 특징이 있다.
