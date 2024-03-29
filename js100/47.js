//주어진 데이터들로부터 중복을 제거하여 실제 접수 인원을 출력하시오.
const people = {
  이호준: "01050442903",
  이호상: "01051442904",
  이준호: "01050342904",
  이호준: "01050442903",
  이준: "01050412904",
  이호: "01050443904",
  이호준: "01050442903",
};

let result = new Set();
for (let key in people) {
  result.add(people[key]);
  console.log(result);
}

console.log(result.size);

// set 공부 다시하세요.
// 전통적으로 object는 문자열을 값에 매핑하는 데 사용되었다. Object는 키를 값으로 설정하고, 값을 검색하고, 키를 삭제하고, 키에 저장된 내용을 검색 할 수 있게 만들어준다. 그러나 Map 객체는 더 나은 맵이 되도록 하는 몇가지 장점을 가지고 있다.
// Object의 키는 Strings 이며, Map의 키는 모든 값을 가질 수 있다.
// Object는 크기를 수동으로 추적해야 하지만, Map은 크기를 쉽게 얻을 수 있다.
// Map은 삽입된 순서대로 반복된다.
// Obejct에는 prototype이 있어 Map에 기본 키들이 있다.

// Object 혹은 Map중에 어느 것을 사용할지를 결정하는데 도움을 줄 두가지 팁이 있다.

// * 실행 시까지 키를 알 수 없고, 모든 키가 동일한 type이며 모든 값들이 동일한 type일 경우에는 object를 대신해서 map을 사용해라,
// * 각 개별 요소에 대해 적용해야 하는 로직이 있을 경우에는 object를 사용해라.
