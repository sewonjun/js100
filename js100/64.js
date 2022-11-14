let N = parseInt(prompt("정량을 입력하시오."), 10);
let result = 0;
//while true는 무한루프를 의미 꼭 break를 써서 나와야함
while(true){
    if(N % 7 === 0){
        result += parseInt(N/7, 10);
        console.log(result);
        break;
    }
    N -= 3;
    result += 1;
    if(N <0){
        console.log(-1);
        break;
    }
}