//별 찍기!!!!!

//크리스마스 트리를 만드시오 ~~ 

//입력 

//결과
//     * 
//    ***
//   *****
//  *******
// *********

const level = 5;
let tree = ""

for(let i=1; i <= level; i++){
    let tree = "";
    // 공백 증가 포문
    for (let k=1; k <= level-i; k++){
        tree = tree + " ";
    } 
    //별 증가 포문
    for (let j = 1; j <= i*2-1; j++){
        tree  = tree + "*";
    }
    console.log(tree);
}
