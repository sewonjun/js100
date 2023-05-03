/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function (n) {
  let count = 0;
  return function () {
    const answer = n + count;
    count++;
    return answer;
  };
};

/**
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */

//고차함수에 대한 질문.. memoize에 대한 부분이기도 함.
// var createCounter = function (n) {
//   return function () {
//     return n++;
//   };
// };
//이렇게 풀어도 되는데. n이 저장되는지 모르겠어서.. 저렇게 풀었다..
