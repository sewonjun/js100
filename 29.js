//진구는 영어 학원 아르바이트를 하고 있다. 반 아아들은 알파벳을 공부하는 학생들인데 오늘은 대문자 쓰기 시험을 봤다.
//알파벳 하나만을 입력하고 그 알파벳이 대문자이면 YES를 아니면 NO를 출력하는 프로그램을 만들어 주세요.

//일단 하나만 입력하게 하는 방법을 못 찾았다.. prompt에 maxlength를 달 수 없는데..
//그리고 입력이 문자가 아닌 숫자나 다른 자료형으로 들어갔을때 오류를 잡지 못했다.

var alpabet = prompt("insert a letter");

if (alpabet == toUpperCase(alpabet)) {
  alert("YES");
} else {
  alert("NO");
}
