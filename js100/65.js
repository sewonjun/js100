const arrayA = [1, 2, 3, 4];
const arrayB = ["a", "b", "c", "d"];
result = [];
// 이런 리스트가 있을 때 **[[1, a], [b, 2], [3, c], [d, 4]]** 이런 식으로 a, b 리스트가 번갈아가면서 출력되게 해주세요.
for (let i = 0; i < arrayA.length; i++) {
  if (i % 2 === 0) {
    result.push([arrayA[i], arrayB[i]]);
  } else {
    result.push([arrayB[i], arrayA[i]]);
  }
}

result;

// 답안
//forEach 방법
const a = [1, 2, 3, 4];
const b = ["a", "b", "c", "d"];
let c = [];

a.forEach(function (e, i) {
  if (i % 2 === 0) {
    c.push([e, b[i]]);
  } else {
    c.push([b[i], e]);
  }
});

console.log(c);

//map 사용
const a = [1, 2, 3, 4];
const b = ["a", "b", "c", "d"];

let c = a.map(function (e, i) {
  if (i % 2 === 0) {
    return [e, b[i]];
  } else {
    return [b[i], e];
  }
});

console.log(c);
