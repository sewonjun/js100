//다음 배열에서 400, 500을 삭제하는 code를 입력하세요. 

var nums = [100, 200, 300, 400, 500]

// let result = nums.pop();
// let result2 = nums.pop();
// pop은 배열의 마지막 요소를 삭제한다. shift는 배열의 맨앞을 삭제


//  nums.splice(3, 2);
// splice(제거할위치, 갯수)


// let filterNums = nums.filter(function(data){
//     return data < 400; 
// })
// console.log(filterNums)
// filter는 다른 함수들과는 다르게 기존 배열을 변경하는 것이 아닌 새 배열을 만들어낸다.. 

// delete nums[3];
// delete nums[4];
//  결과 -> [100, 200, 300, undefined, undefined] 배열의 길이가 줄어들지 않고 값이 비워진다



console.log(nums);

