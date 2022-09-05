let characters = prompt("insert ant letters");

let result = "";

let store = characters[0];

let count = 0;

for (let i of characters) {
  if (i === store) {
    count += 1;
  } else {
    result += store + String(count);
    store = i;
    count = 1;
  }
}

result += store + String(count);
console.log(result);
