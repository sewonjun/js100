function solution(n) {
    const temp = []; //3의 배수가 담기는 곳..
    let calN = n;//주어진 매개변수
    let pattern = 0;// count 자리수까지 가면 나오는 갯수
    let count = 0;//자릿수
    while(pattern < calN){
        let plusPattern = 1; // 3의 배수;
        for(let i=0; i<=count; i++){
            plusPattern *= 3
        }
        temp.push(plusPattern);
        pattern += plusPattern;
        console.log(plusPattern, pattern);
        count++;
    }

    for(let i = 0; i < temp.length - 1; i++){
        calN -= temp[i];
    }
    console.log("calN",calN); //count 자릿수에서 순서..

}

const n = 22; //144;


solution(n);
