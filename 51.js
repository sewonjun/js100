//병합 정렬

//코드의 반킨을 채워 병합정렬을 완성하시오.

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let result = [];
  while (/*빈칸 채우세용*/ && /*빈칸 채우세용*/){
    if (/*빈칸 채우세용*/){
        result.push(left.shift());
    } else {
        result.push(right.shift());
    }
  }
  while(left.length){
    /*빈칸 채우세용*/
  }
  while(right.length){
    /*빈칸 채우세용*/ 
  }
  return result;
}

const array = prompt('배열을 입력하세요').split('').map(n => parseInt(n,10));
console.log(mergeSort(array));