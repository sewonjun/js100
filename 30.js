//문자 pineapple에는 apple이라는 문자가 숨어 있다. 원범이는 이렇듯 문자열 속에 숨어있는 문자를 찾아보려고 한다.
//첫번째 입력에서는 문자열이 입력되고, 두번째에는 찾을 문자가 입력되어야 한다.
//그 문자가 시작하는 index를 반환하는 프로그램을 만들어라..

var firstInput = prompt("something here");

var secondInput = prompt("something to find");

console.log(firstInput.indexOf(secondInput));

//indexOf는 배열에서 지정된 요소를 찾을 수 있는 첫번째 인덱스를 반환하고 존재하지 않으면 -1을 반환한다.
