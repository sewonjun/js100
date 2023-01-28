function solution(number, k){
    debugger;
    let answer = "";
     let numberLength = number.length - k;
    let rest;
    while(k > 0){
        let currentNum = 0;
        let idxOfNum;
        for(let i=0; i <= number.length-k; i++){
            const restLength = number.length - k
            const nextNum = number.slice(i, i+restLength);
            if(nextNum.length !== restLength){
                break;
            }

            if(Number(currentNum) > Number(nextNum)){
                continue;
            } else if (Number(currentNum) <= Number(nextNum)) {
                currentNum = nextNum;
                idxOfNum = i;
            }
        }
        answer += number[idxOfNum];
        k = k - idxOfNum;
        number = number.slice(idxOfNum+1);
        rest = number;
    }
    if(answer.length !== numberLength){
        answer += rest;
    }
    return answer;
}


const number = "93939";
const k = 3;
