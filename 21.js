//set 이란 중복되지 않는 데이터를 저장하는 데이터 구조
const list = [1, 2, 2, 3, 4, 5, 5, 5, 6];
let setVal = new Set(list);
console.log(setVal);
// 0: 1
// 1: 2
// 2: 3
// 3: 4
// 4: 5
// 5: 6
setVal.add(10);
setVal.delete(10);
setVal.has(10);
//다음 중 set를 만드는 방법으로 올바른 것을 모두 고르시오.
//1) var x = {1,2,3,5,6,7}; x
//2) var x = {}; x
//3) var x = new Set('javascript'); o
//4) var x = new Set(range(5));x
//5) var x = new Set();o
