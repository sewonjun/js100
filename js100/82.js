// 괄호 짝 맞추는 문제

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
        if (t !== stack.pop()) {
          return false;
        }
      }
    }
  }
  return stack.length === 0;
}

while (1) {
  const order = propmt("데이터를 입력(1), 프로그램 종료(2)");
  if (order === "1") {
    const ex = prompt("데이터를 입력하세요").split("");
    console.log(math(ex));
  } else {
    break;
  }
}
