const route = [];

function hanoi(, 시작기둥, 목표기둥, 보조기둥){
    if(num ===1){
        route.push([start, end]);
        return NaN;
    }

    hanoi(num-1, start, temp, end);
    route.push([start, end]);
    hanoi(num-1, temp, end, start);
}

hanoi(3, 'A', 'B', 'C');
console.log(route);
console.log(route.length);

//하노이의 탑 
//일단 재귀함수 실행시 읽히는 순서가 헷갈렸고..뒤죽박죽 엉키는 매개변수 때문에 또 한참 헤맸다. 