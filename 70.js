function solution(a, b) {
  let result = [];
  const len = a[0].length;

  if (len === b.length) {
    for (let i = 0; i < len; i++) {
      let row = [];
      for (let j = 0; j < len; j++) {
        let x = 0;
        for (let k = 0; k < len; k++) {
          x += a[i][k] * b[k][j];
        }
        row.push(x);
      }
      result.push(row);
    }
    return caches;
  } else {
    return -1;
  }
}

const a = [
  [1, 2],
  [2, 4],
];
const b = [
  [1, 0],
  [0, 3],
];

console.log(solution(a, b));
