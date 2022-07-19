//2-gram이란 문자열에서 2개의 연속된 요소를 출력하는 방법이다.

var word = "2-gram".split("");
console.log(word);

for (i = 1; i < word.length; i++) {
  console.log(word[i - 1], word[i]);
}
//for(i=0; i<word.length-1; i++){
//     console.log(word[i], word[i+1])
// }
