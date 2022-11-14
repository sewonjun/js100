//숫자가 주어지면 소수인지 아닌지 판별하는 프로그램을 작성해 주세요.
//소수이면 YES로, 소수가 아니면 NO로 출력해주세요.
//(소수: 1과 자기 자신만으로 나누어떨어지는 1보다 큰 양의 정수)
//소수 판별법 알고리즘

const num = prompt("insert number");

function primeNumber(n) {
  for (let i = 2; i < n; i++) {
    const result = n % i;
    if (result === 0) {
      console.log("NO");
      return false;
      //함수 종료
    }
  }
  if (n === 1) {
    console.log("NO");
    return;
  }
  console.log("YES");
}

primeNumber(num);

//일단 보통 2의 배수는 소수가 아니기 때문에 2로 시작하고 ..
