// 모든 놀이기구는 한번에 타는 인원수에는 제한이 없지만 제한 무게를 넘으면 무조건 다음 기구를 타야한다.
//원범이와 친구들이 총 몇 명 탈 수 있는 지 프로그램을 작성하라.

//첫번째 입력으로 제한 무게가 주어지고 두번째 입력으로는 함꼐한 친구들의 수 n이 주어진다.
//그 다음 차례대로 탑승할 친구들의 몸무게가 주어진다.
//몸무게는 무작위로 주어진다.

const limit = prompt("insert limit weight");

const numOfperson = prompt("insert the number of person");

let count = 0;
let totalWeight = 0;

for (let i = 0; i < numOfperson; i++) {
  totalWeight = totalWeight + parseInt(prompt("insert your weight"), 10);
  if (totalWeight <= limit) {
    count++;
  }
}
console.log(count);
