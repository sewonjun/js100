//단계
//1. 소문자로 변경 -> 배열을 만드는게 빠르지 않을까..?
//2. 소문자, 숫자, -, _, . 제외 문자들 제거
//3. . 마침표가 연속으로 들어가 있으면 하나로 바꿔주기
//4. 첫 마침표, 끝 마침표 제거하기
//5. 빈문자열이면 new_id에 a를 대입하기
//6. 15자 이상이면 15자 까지 제거하기, 그리고 만약 마침표가 끝에 위치한다면 끝에 마침표 제거하기
//7. new_id가 2자 이하라면 마지막 문자를 new_id의 길이가 3일 될때까지 반복하기.


function solution(id){
    const splitedId = id.split("");
    console.log(splitedId);
    const ableChars = []; // 소문자 알파벳
    const unAbleChars = [];
    const dash = "-";
    const underDash = "_";
    const period = "."
    for(let i = 97; i <= 122; i++){
        ableChars.push(String.fromCharCode(i));
    }

    for(let i = 65; i <= 90; i++){
        unAbleChars.push(String.fromCharCode(i));
    }
    console.log(unAbleChars);
    const firstStep = function(idArray){
        idArray.forEach((element, index) => {
            if(unAbleChars.indexOf(element) !== -1){
                const indexOfUpperCase = unAbleChars.indexOf(element);
                console.log(index);
                splitedId[index] = ableChars[indexOfUpperCase];
            }
        })
    }
    
    const secondStep = function () {
        let periodCount = 0;
        while(periodCont > 1)
    }
}

const new_id = "...!@BaT#*..y.abcdefghijklm";

solution(new_id);
