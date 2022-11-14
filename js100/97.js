//답안
function sol(n, l) {
  //n: 택배원 수, l: 택배들
  let answer = 0;
  //택배원 수 만큼의 배열 생성
  let man = new Array(n).fill(0);
  console.log(man);
  //모듬 택배가 상하차 되었으면 종료
  while (l.length !== 0) {
    for (let j = 0; j < man.length; j++) {
      if (man[j] === 0 && l) {
        man[j] += l.shift();
      }
    }
    if (l.length === n - 1) {
      Math.max.apply(null, l) == 1;
      answer += 1;
      return false;
    } else if (l.length === 1) {
      answer += l[0];
    } else {
      return false;
    }
    //택배원들 배송거리 -1 처리
    man = man.map((x) => x - 1);
    console.log(man);
    //1회 반복당 1의 시간 증가
    answer += 1;

    //남은 숫자가 하나일때
    // for (e of l) {
    //   answer += e;
    // }
  }
  return answer;
}

//   console.log(Math.max.apply(null, man));
//   answer += Math.max.apply(null, man);

const postMan = 3;
const deliveryService = [1, 2, 1, 3, 3, 3, 2, 2];
console.log(sol(postMan, deliveryService));

/*******
 * n 명의 택배 배달원은 쌓인 택배를 배달해야 합니다.
 * 각 택배는 접수된 순서로 배달이 되며 택배마다 거리가 주어집니다.
 * 거리1당 1의 시간이 걸린다고 가정하였을 때 모든 택배가 배달 완료될 시간을 구하세요.
 *
 * 1. 모든 택배의 배송 시간 1 이상이며 배달지에 도착하고 돌아오는 왕복 시간입니다.
 * 2. 택배는 물류창고에서 출발합니다.
 * 3. 배달을 완료하면 다시 물류창고로 돌아가 택배를 받습니다.
 * 4. 물류창고로 돌아가 택배를 받으면 배달을 시작합니다.
 * 5. 택배를 상차할 때 시간은 걸리지 않습니다.
 *
 * 입력은 배달원의 수와 택배를 배달하는 배달 시간이 주어집니다.
 *
 * ex) 배달원이 3명이고 각 거리가 [1,2,1,3,3,3]인 순서로 들어오는 경우
 * ********/
const rider = 5;
const times = [1, 2, 1, 3, 3, 2, 4, 3, 2];
//////////////////////////////
function get_sum_of_arr(arr) {
  return arr.reduce((a, b) => a + b);
}
function mySolution(rider, times) {
  let timeList = [...times];
  let deliver = timeList.splice(0, rider);
  let delayTime = 0;
  while (true) {
    for (let i = 0; i < deliver.length; i++) {
      if (deliver[i] <= 0) {
        if (timeList.length != 0) {
          const next = timeList.shift();
          deliver[i] = next;
        }
      } else {
        deliver[i] -= 1;
      }
    }
    if (get_sum_of_arr(deliver) <= 0) {
      break;
    }
    delayTime++;
  } //while
  console.log(delayTime);
} //mySolution
mySolution(rider, times);
