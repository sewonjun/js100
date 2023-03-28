let fs = require('fs');
let input = fs.readFileSync("예제.txt").toString().trim().split('\n');
///dev/stdin

const questions = input.slice(0, -1);
const answer = questions.map((question) => solution(question));

function solution(question) {
  const stack = [];
  let balancedSentence = null;
  for (char of question) {
    if (char === ".") {
      balancedSentence = "yes";
      break;
    }
    if (char !== " ") {
      if (char === "(" || char === "[") {
        stack.push(char);
        continue;
      }

      if (char === ")") {
        const currentStack = stack.pop();
        // console.log("()일때", currentStack, char);
        if (currentStack === "("){
          continue;
        } else {
          balancedSentence = "no";
          break;
        }
      }

      if (char === "]") {
        const currentStack = stack.pop();
        // console.log("[]일떄", currentStack, char);
        if (currentStack === "["){
          continue;
        } else {
          balancedSentence = "no";
          break;
        }
      }
    }
  }

  if(stack.length){
    balancedSentence = "no"
  }

  return balancedSentence;
}

console.log(answer.join("\n"));
