function solution(orders, course) {
  var answer = [];
  for (const courseNumber of course) {
    const courseNumberArray = [];
    for (const order of orders) {
      const orderArray = order.split("");
      let courseCombination = makeCombinations(orderArray, courseNumber);
      courseNumberArray.push(...courseCombination);
    }
    console.log(courseNumberArray);
  }
  function verifySameArray(a, b) {
    if (a === undefined) return false;
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) {
        return false;
      }
      return true;
    }
  }
  function makeCombinations(arr, selectNumber) {
    const result = [];
    if (arr.length < selectNumber) return [];
    if (selectNumber === 1) return arr.map((el) => [el]);

    arr.forEach((fixed, index, origin) => {
      const rest = origin.slice(index + 1);

      const combinations = makeCombinations(rest, selectNumber - 1);

      const attached = combinations.map((el) => [fixed, ...el]);
      console.log(attached);
      result.push(...attached);
    });
    return result;
  }
  return answer;
}

const orders = ["ABCFG", "AC", "CDE", "ACDE", "BCFG", "ACDEH"];
const course = [2, 3, 4];
const answer = solution(orders, course);
console.log(answer);
