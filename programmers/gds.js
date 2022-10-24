function solution(denum1, num1, denum2, num2) {
  var answer = [];
  //최소공배수 구하기
  function getLCM(num1, num2) {
    let lcm = 1;
    while (true) {
      if (lcm % num1 == 0 && lcm % num2 == 0) {
        break;
      }
      lcm++;
    }
    return lcm;
  }
  //최소공배수
  let lcm_num = getLCM(num1, num2);

  function fraction(denum, num) {
    //최소공배수 분모로 나눈기
    let divLCMwithNum = lcm_num / num;
    let newDenum = denum * divLCMwithNum;
    return newDenum;
  }
  //분자의 값을 도출
  let newFraction1 = fraction(denum1, num1);
  console.log(newFraction1);
  let newFraction2 = fraction(denum2, num2);
  console.log(newFraction2);

  let sumDenum = newFraction1 + newFraction2;
  if (sumDenum % lcm_num === 0) {
    answer.push(sumDenum / lcm_num, 0);
  } else answer.push(sumDenum, lcm_num);
  console.log(answer);
  //   return answer;
}
solution(1, 7, 5, 4);
