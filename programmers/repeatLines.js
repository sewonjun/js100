function solution(lines) {
  var answer = 0;
  let arrayA = [];
  //선분이 가지고 있는 숫자를 나열함.
  for (i = 0; i < lines.length; i++) {
    lines[i].sort();
    for (let j = lines[i][0]; j <= lines[i][1]; j++) {
      arrayA.push(j);
    }
    console.log(arrayA);
  }
  //나열한 숫자들 속에서 반복 선분을 찾을 차례..
  let duplicate = [];
  let set = new Set(arrayA);
  console.log(set);
  console.log(arrayA);
  // return answer;

  function getSortedArr(array) {
    // 1. 출연 빈도 구하기
    const counts = array.reduce((pv, cv) => {
      pv[cv] = (pv[cv] || 0) + 1;
      return pv;
    }, {});

    // 2. 요소와 개수를 표현하는 배열 생성 => [ [요소: 개수], [요소: 개수], ...]
    const result = [];
    for (let key in counts) {
      result.push([key, counts[key]]);
    }

    // 3. 출현 빈도별 정리하기
    result.sort((first, second) => {
      // 정렬 순서 바꾸려면 return first[1] - second[1];
      return second[1] - first[1];
    });
  }

  let arrayB = getSortedArr(arrayA);
  console.log(arrayB);
  let arrayC = [];
  for (e of arrayB) {
    if (e[1] > 1) {
      arrayC.push(e[0]);
    }
  }
  console.log(arrayC);

  function result() {
    for (let i = 0; i < num.length - 1; i++) {
      if (num[i] + 1 != num[i + 1]) return "NO";
    }
  }
}
const lines = [
  [0, 1],
  [2, 5],
  [9, 3],
];

solution(lines);

// array1 = [0, 1];
// array2 = [1];

// console.log(array1.includes(...array2));
