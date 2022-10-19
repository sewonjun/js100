// 머쓱이는 태어난 지 11개월 된 조카를 돌보고 있습니다. 조카는 아직 "aya", "ye", "woo", "ma" 네 가지 발음과 네 가지 발음을 조합해서 만들 수 있는 발음밖에 하지 못하고 연속해서 같은 발음을 하는 것을 어려워합니다. 문자열 배열 babbling이 매개변수로 주어질 때, 머쓱이의 조카가 발음할 수 있는 단어의 개수를 return하도록 solution 함수를 완성해주세요.

// let a = "ayaye";
// let b = "aya";
// let match = a.match(b);
// //찾은 배열 없애줌
// let a1 = a.replace(match, "");
// console.log(a1);

//생각해야 할 조건
//1. 매치하는 부분을 찾으면.. 지울지 .. 아니면 slice를 해야 하는지..
//2. 연속하는 글자는 발음할 수 없다는 부부을 처리할 방법..
const able = ["aya", "ye", "woo", "ma"];
const babbling = ["aya", "ayayewoomawooma", "woowoo", "maa"];
function solution(a) {
  let answer = 0;
  let matchArray = [];
  for (e of a) {
    matchArray = [];
    for (word of able) {
      //match되는 음절이 있는지 찾는중..
      if (e.match(word)) {
        let matchWord = e.match(word);
        matchArray.push(matchWord);
        e = e.replace(matchWord, "");
        console.log(e);
        //replace시키고 길이가 남았는지..
        if (e.length === 0) {
          answer += 1;
          break;
        } else {
          continue;
        }
      }
    }
    for (i = 0; i < matchArray.length; i++) {
      if (matchArray[i] === matchArray[i + 1]) {
        answer -= 1;
      }
    }
  }
  console.log(answer);
}

solution(babbling);
