function solution(n) {
  const memoization = {
    0: 0,
    1: 1,
    2: 1,
  };

  if (n < 3) {
    return memoization[Number(n)];
  }

  let curF = 3;

  while (curF <= n) {
    memoization[curF] =
      (memoization[curF - 2] + memoization[curF - 1]) % 1234567;
    curF++;
  }

  return memoization[n] % 1234567;
}
