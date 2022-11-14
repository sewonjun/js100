//소괄호와 중괄호가 제대로 입력되었는지 확인하자.
//1.{(}) -> 이런경우를 막을 수 있어야 한다.

function math(e) {
  const m = {
    ")": "(",
    "}": "{",
  };
  let stack = [];

  for (let i = 0; i < e.length; i++) {
    if (e[i].includes("(") || e[i].includes("{")) {
      stack.push(e[i]);
    } else if (m[e[i]]) {
      if (stack.length === 0) {
        return false;
      } else {
        let t = m[e[i]];
        if (t != stack.pop()) {
          return false;
        }
      }
    }
  }
  return stack.length === 0;
}

while (1) {
  const order = prompt("데이터 입력(1), 프로그램 종료(2)");
  if (order === "1") {
    const ex = prompt("데이터를 입력하세요").split("");
    console.log(math(ex));
  } else {
    break;
  }
}
