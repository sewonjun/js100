//1~9까지의 숫자 중 하나를 입력하면 그 단의 구구단 결과를 한 줄에 출력하는 프로그램을 작성하시오
let num = prompt("insert a number");
if (num > 10) {
  alert("you should insert under 10 and upper 0");
} else if (num < 1) {
  alert("you should insert under 10 and upper 0");
} else {
  for (i = 1; i < 10; i++) {
    console.log(num * i);
  }
}
