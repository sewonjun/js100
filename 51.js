//병합 정렬

//코드의 반킨을 채워 병합정렬을 완성하시오.

//나누는 부분
function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
}

//정렬하고 병합하는 부분
function merge(left, right) {
  let result = [];
  while (left.length && right.length) {
    //left.length = left의 길이가 존재하는 한 이라는 뜻.
    if (left[0] < right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  while (left.length) {
    result.push(left.shift());
  }
  while (right.length) {
    result.push(right.shift());
  }
  return result;
}

const array = prompt("배열을 입력하세요")
  .split("")
  .map((n) => parseInt(n, 10));
console.log(mergeSort(array));
