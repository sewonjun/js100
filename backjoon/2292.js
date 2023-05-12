let fs = require("fs");
const { isModuleNamespaceObject } = require("util/types");
const filePath = process.platform === "linux" ? "./dev/stdin" : "예제.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let multiple = 1;
let houseMade = 1;
while (houseMade < input) {
  houseMade = houseMade + multiple * 6;
  multiple++;
}

console.log(multiple);
