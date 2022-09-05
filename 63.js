const fullSen = prompt("별다줄 할 문장을 넣으시오.");

let fullSenSpilt = fullSen.split(" ");

console.log(fullSenSpilt);
let result = "";
function shortenSen(n) {
  for (i = 0; i < n.length; i++) {
    result = result + n[i][0];
  }
}

shortenSen(fullSenSpilt);
console.log(result);
