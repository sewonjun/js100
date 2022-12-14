function solution(name) {
    var answer = 0;
    const upButton = [];
    const downButton = ["A"];
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

    if(validateAllA(splitedName) === true){
        return answer = 0;
    } 
    else {
        for (let i = 0; i < splitedName.length; i++) {
            if (splitedName[i] === "A") {
             splitedName[i+1] !== "A" ? count+1 : count;
            } else {
              const upNumber = upButton.indexOf(splitedName[i]);
              const downNumber = downButton.indexOf(splitedName[i]);
              console.log(upNumber, downNumber);
              upNumber >= downNumber
                ? (count += downNumber)
                : (count += upNumber ;
            }
          }
    }
    
    console.log(count);
    return answer ;
}