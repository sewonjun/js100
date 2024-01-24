function solution(k, tangerine) {
  let answer = 0;

  const sizeSorted = tangerine.reduce((acc, cur) => {
    acc[cur] ? (acc[cur] += 1) : (acc[cur] = 1);
    return acc;
  }, {});

  const sizeSortedArr = Object.entries(sizeSorted);

  const descendingSizeCount = sizeSortedArr.sort((a, b) => {
    if (a[1] > b[1]) return -1;

    if (a[1] < b[1]) return 1;

    return 0;
  });

  for (let i = 0; i < descendingSizeCount.length; i++) {
    k -= descendingSizeCount[i][1];

    if (k <= 0) {
      answer = i + 1;

      break;
    }
  }

  return answer;
}
