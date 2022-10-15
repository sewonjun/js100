let durability = [1, 3, 1, 4, 5, 3];
let rabbitJump = [2, 1, 3, 1];
let result = [];
for (let j = 0; j < rabbitJump.length; j++) {
  let e = rabbitJump[j];
  let dLength = Math.floor(durability.length / e);
  let array1 = [];
  for (i = 1; i < dLength; i++) {
    durability[e * i - 1] -= e;
    if (durability[e * i - 1] < 0) {
      array1.push(durability[e * i - 1]);
    }
  }
  console.log(durability);

  if (array1.length > 0) {
    result.push(false);
  } else {
    result.push(true);
  }
}
console.log(result);
