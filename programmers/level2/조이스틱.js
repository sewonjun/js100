function solution(name) {
    var answer = 0;
    const upButton = []; //위로 버튼 조작시
    const downButton = ["A"]; // 아래로 버튼 조작시
    for (let i = 65; i <= 90; i++) {
      upButton.push(String.fromCharCode(i));
    }
    for (let i = 90; i > 65; i--) {
      downButton.push(String.fromCharCode(i));
    }

    let count = 0;
    const splitedName = name.split("");
    function validateAllA(array) {
      const aLength = array.filter((char) => char === "A");
      if (aLength.length === array.length) {
        return true;
      } else {
        return false;
      }
    }
    function moveStick(element, count){
      const upNumber = upButton.indexOf(element);
      const downNumber = downButton.indexOf(element);
      console.log(upNumber, downNumber);
      upNumber >= downNumber
        ? (count += downNumber)
        : (count += upNumber )
    }
    if(validateAllA(splitedName)){
        return answer = 0;
    }
    else {
      let countLeft = 0;
      for (let i = 0; i < splitedName.length; i++) {
          if (splitedName[i] === "A") {
            const splicedName = splitedName.slice(i);
            if(validateAllA(splicedName)){
              break;
            } else {
              countLeft += 1;
            }
          } else {
            moveStick(splitedName[i], countLeft);
            if(i !== splitedName.length - 1){
              countLeft += 1;
            }
          }
        }
      let countRight = 0;
      moveStick(splitedName[0], countRight);
      for (let i = splitedName.length - 1; i > 0; i--) {
        if (splitedName[i] === "A") {
          const splicedName = splitedName.slice(1, i + 1);
          if(validateAllA(splicedName)){
            break;
          } else {
            if(i !== 1){
              countRight += 1;
            }
          }
        } else {
          moveStick(splitedName[i], countRight);
          if(i !== 1){
            countRight += 1;
          }
        }
      }

      console.log("최종",countLeft, countRight);
    }
    
    console.log(count);
    return count ;
}

// const names = "JEROEN"
const names = "JAANA"

solution(names);
