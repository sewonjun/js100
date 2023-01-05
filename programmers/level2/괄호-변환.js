// () {} []
//왼쪽으로 이동시켰을 때 올바른 괄호가 되는 x의 갯수;
const s = "[](){}";
const small = ["(", ")"];
const middle = ["{", "}"];
const large = ["[", "]"];
function solution() {
  var answer = -1;

  return answer;
}
const bracket = {
  "(": ")",
  "{": "}",
  "[": "]",
};
console.log(bracket["("]);
const splitedS = s.split("");
console.log(splitedS);
const falseBox = [];
// splitedS.forEach((element) => {
//   if (bracket[element] === undefined) {
//     falseBox.push(false);
//   } else {
//     const rightBracket = bracket[element];
//     const rightIdx = splitedS.indexOf(rightBracket);
//     splitedS[rightIdx] = "";
//     console.log(splitedS);
//   }
// });
for (let i = 0; i < splitedS.length; i++) {
  const element = splitedS[i];
  if (bracket[element] === undefined) {
    return false;
  } else {
    const rightBracket = bracket[element];
    const rightIdx = splitedS.indexOf(rightBracket);
    splitedS[rightIdx] = "";
    console.log(splitedS);
  }
}
