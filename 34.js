//키가 주어지면 순서대로 제대로 섰는지 확인하는 프로그램을 작성하시오.

var height = "176, 156, 155, 165, 166, 169";

let orderHeight = "";

console.log(
  height.split(" ").sort(function (a, b) {
    return a - b;
  })
);
//sort가 a-b를 했을시 음수가 나오면.. 정렬을 바꾼다.. 이게 sort 함수
//mdn 문서 참조 compareFunction(a, b)이 0보다 작은 경우 a를 b보다 낮은 색인으로 정렬합니다. 즉, a가 먼저옵니다.

//왜라는게 없음.. 그냥 그런 함수임 우리는 그걸 야무지게 활용하면 됨.
