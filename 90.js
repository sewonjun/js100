const medi_A = "ABCDEFGH".split("");
console.log(medi_A);

//Math.random 에서 두 수 사이에 정수 난수 생성하기
function getRandomInt(min, max) {
  min = Math.ceil(min); //올림
  max = Math.floor(max); //내림
  let random = Math.floor(Math.random() * (max - min)) + min;
  return random;
}

//97 122는 소문자 아스키문자
//
function getGUID(length) {
  //97-122 사이에 랜덤한 정수 만들기
  let result = [];
  while (result.length < 8) {
    let randomLetters = String.fromCharCode(getRandomInt(65, 90));

    if (!result.includes(randomLetters)) {
      result.push(randomLetters);
    }
  }

  //아스키 문자를 이용하여 문자로 반화
  return result;
}
let medi_total = [];
for (let i = 0; i < 100; i++) {
  medi_total.push(getGUID(8));
}

console.log(medi_total);

// let medi_match = [];

//4글자 겹치는거 확인 코드
// for (let i of medi_total) {
//     for(let j of medi_A){
//         let match_num = [];
//         if(i.includes(j)){
//             match_num.push(j);
//         }
//         console.log(match_num);
//     }
//   }
