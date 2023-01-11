const patternOne = [1, 2, 3, 4, 5];
const patternTwo = [2, 1, 2, 3, 2, 4, 2, 5];
const patternThree = [3, 3, 1, 1, 4, 4, 5, 5];
function solution(answers) {
  var answer = [];
  const answerLength = answers.length;
  const answerSheet = [];
  makeAnswerSheet(answerLength, patternOne);
  makeAnswerSheet(answerLength, patternTwo);
  makeAnswerSheet(answerLength, patternThree);
  console.log(answerSheet);
  function makeAnswerSheet(answerLength, pattern) {
    let eachAnswerSheet = [];
    const restNumberLength = answerLength % pattern.length;
    const repeatNumber = Math.floor(answerLength / pattern.length);
    console.log(restNumberLength, repeatNumber);
    if (repeatNumber > 0) {
      for (let i = 1; i <= repeatNumber; i++) {
        eachAnswerSheet.push(...pattern);
      }
    }
    if (restNumberLength !== 0) {
      for (let i = 0; i < restNumberLength; i++) {
        eachAnswerSheet.push(pattern[i]);
      }
    }
    answerSheet.push(eachAnswerSheet);
  }
  // return answer;
}
