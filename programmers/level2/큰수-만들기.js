function solution(number, k) {
    var answer = '';
    const firstOperation = function (number,k){
        let currentNum = 0;
        let indexOfAnswer = 0;
        const returnLength = number.length - k;
        for(let i=0; i<k; i++){
            if( k === 1){
                 nextNum = number[i];
            }
            const nextNum = number.slice(i, returnLength+i);
            if(currentNum > nextNum){
                continue;
            } else {
                currentNum = nextNum;
                indexOfAnswer = i;
            }
        }
        answer += number[indexOfAnswer];
        if(answer.length < returnLength){
            console.log("여기는 오니?")
            number = number.slice(indexOfAnswer+1);
            k = k - 1;
            console.log(number, k);
            firstOperation(number, k);
        } else{
            return answer;
        }
    }
    console.log(firstOperation(number, k))
}

const number = "1924";

const k = 2;


solution(number, k);