function solution(frame, page) {
  let runTime = 0;
  let temp = [];

  // frame이 0일때, page의 크기만큼 6을 곱해주고 끝낸다
  if (frame === 0) {
    runTime = page.length * 6;
    return runTime;
  }

  for (let i of page) {
    if (temp.includes(i)) {
      runTime += 1;
    } else {
      // 배열이 비었으면 무조건 넣어야 하므로 if문을 사용
      if (temp.length < frame) {
        temp.push(i);
      } else {
        // 가장 사용되지 않은 첫번째 배열을 제거하고 맨 뒤에 입력값을 저장
        temp.shift();
        temp.push(i);
      }

      // if문 실행에 상관없이 runTime은 10이 추가된다
      runTime += 6;
    }
  }
  return runTime;
}

const f = parseInt(prompt("프레임을 입력해주세요."), 10);
const page = prompt("페이지를 입력해주세요.").split("");

console.log(solution(f, page));

//민준님 코드
//원형 큐 처럼 % 연산자를 이용해 순서가 돌아오게 만들어줌.
/**
 * 적재할 페이지, 메모리 크기,
 * hit와 miss 일 때의 실행시간이 담긴 객체를 받아,
 * FIFO 페이지 교체 알고리즘을 실행할 때 총 실행시간을 구하는 함수
 *
 * @param {string} PAGE_LIST 적재할 페이지를 나열한 문자열
 * @param {number} MEMORY_SIZE 메모리의 크기
 * @param {Object} RUNTIME_INFO hit와 miss 일 때의 실행시간이 담긴 객체
 * @returns {number} 총 실행시간
 */
function getRuntimeWithFIFO(PAGE_LIST, MEMORY_SIZE, RUNTIME_INFO) {
  const { HIT, MISS } = RUNTIME_INFO;
  let memory = [];
  let runTime = 0;

  let oldestPageIndex = 0;
  for (const PAGE of PAGE_LIST) {
    // PAGE가 메모리에 이미 있다면, HIT
    if (memory.includes(PAGE)) runTime += HIT;
    // PAGE가 메모리에 없다면,
    else {
      // 메모리가 꽉 찼을 경우는 제일 오래된 것 교체
      if (memory.length === MEMORY_SIZE) {
        memory[oldestPageIndex] = PAGE;
        oldestPageIndex += 1;
        oldestPageIndex %= MEMORY_SIZE;
      } else memory.push(PAGE);
      runTime += MISS;
    }

    console.log(memory);
  }

  return runTime;
}

function solution() {
  const PAGE_LIST = "BCBAEBCE";
  const MEMORY_SIZE = 3;
  const RUNTIME_INFO = {
    HIT: 1,
    MISS: 6,
  };

  const result = getRuntimeWithFIFO(PAGE_LIST, MEMORY_SIZE, RUNTIME_INFO);
  console.log(result); // 38
}

solution();
