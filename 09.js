//다음 소스 코드를 완성하여 날짜와 시간을 출력하시오

var year = '2019';
var month = '04';
var day = '26';
var hour = '11';
var minute = '34';
var second = '27';

//내 풀이 
var days = [year + "-" +  month + "-" + day ]
console.log(days);

var time = [hour + ":" + minute + ":" + second ];

var result = days.concat(time);

console.log(result);


// 모범답안?

var result = year.concat ('/', month, '/', day, ' ', hour, ':', minute, ':', second );

//하나의 객체만 있으면 그게 배열이 안된다고 생각했는데 배열도 어처피 객체이기 때문에 배열로 취급할 수 있는 것일까? 

console.log(result)

//"2019/04/26 11:34:27"