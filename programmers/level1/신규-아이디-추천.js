//단계
//1. 소문자로 변경 -> 배열을 만드는게 빠르지 않을까..?
//2. 소문자, 숫자, -, _, . 제외 문자들 제거
//3. . 마침표가 연속으로 들어가 있으면 하나로 바꿔주기
//4. 첫 마침표, 끝 마침표 제거하기
//5. 빈문자열이면 new_id에 a를 대입하기
//6. 15자 이상이면 15자 까지 제거하기, 그리고 만약 마침표가 끝에 위치한다면 끝에 마침표 제거하기
//7. new_id가 2자 이하라면 마지막 문자를 new_id의 길이가 3일 될때까지 반복하기.
const period = "."
const removeFirstLastPeriod = function (array) {
  while (true) {
    const first = array[0];
    const last = array[array.length - 1];
    if(first !== period && last !== period){
      break;
    }
    if(first === period){
    array.splice(0, 1);
    }
    if(last === period){
      array.pop();
    }
  }
  // console.log("array", array);
  return array;
}
const removeContinuousPeriod = function (array) {
  let flag = true;
  while(flag){
    let periodCount = 0;
    for(let i = 0; i < array.length; i++){
      const element = array[i];
      if(i === array.length - 1 && periodCount < 2){
        flag = false;
      }
      if(element === period){
        periodCount += 1;
      }
      if(element !== period && periodCount < 2){
        periodCount = 0;
      };
      if(element !== period && periodCount >= 2) {
        // console.log("before" ,array);
        array.splice(i - periodCount, periodCount, ".");
        // console.log(array);
        break;
      }
    }
  }
  return array;
}

function solution(new_id){
  let splitedId = new_id.toLowerCase().split("");
  const unableSymbols = "-_.~!@#$%^&*()=+[{]}:?,<>/".split("");

  let filteredId = splitedId.filter((element) => {
    if(unableSymbols.includes(element) === false){
      return element;
    }
    if(element === "." ){
      return element;
    }
    if(element === "-"
    ) {
      return element;
    }
    if(element === "_"
    ) {
      return element;
    }
  })

  const idPeriodNotContinuous = removeContinuousPeriod(filteredId);
  // console.log(filteredId);
  let idPeriodFiltered = removeFirstLastPeriod(idPeriodNotContinuous);
  // console.log(filteredId.length);

  const idLength = idPeriodFiltered.length;

  if (idLength >= 3 && idLength <= 15) {
    // console.log("Quick return", filteredId)
    return filteredId.join("");
  }

  if (!idLength){
    idPeriodFiltered.push("aaa");
    // const combindeArray = new Array((2)).fill(idPeriodFiltered[0]);
    // idPeriodFiltered.push(...combindeArray);
    return idPeriodFiltered.join("");
  }

  if( idLength > 15){
    idPeriodFiltered.splice(15);
    idPeriodFiltered = removeFirstLastPeriod(idPeriodFiltered);
    return idPeriodFiltered.join("");
  }
  if (idLength < 3 && idLength > 0) {
    const combindeArray = new Array((3 - idLength)).fill(idPeriodFiltered[idLength - 1]);
    idPeriodFiltered.push(...combindeArray);
    return idPeriodFiltered.join("");
  }
}



// const new_id = "...!@BaT#*..y.abcdefghijklm"
// const new_id = "z-+.^.";
// const new_id = "=.=";
// const new_id = "123_.def"
// const new_id = "abcdefghijklmn.p"
const new_id = "f...b";

console.log(solution(new_id));
