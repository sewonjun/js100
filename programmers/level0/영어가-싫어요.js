function solution(numbers) {
  var answer = 0;
  const numberObj = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };
  const objValues = Object.keys(numberObj);
  objValues.map((element) => {
    if (numbers.includes(element)) {
      const realNum = numberObj[element];
      numbers = numbers.replaceAll(element, realNum);
    }
  });
  answer += Number(numbers);
  return answer;
}
