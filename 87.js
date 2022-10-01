const name = "손오공 야모차 메지터 비콜로".split(" ");
const plate = "70 10 55 40".split(" ");
const plate_num = plate.map((a) => parseInt(a, 10));

let obj1 = [];
for (i = 0; i < name.length; i++) {
  obj1.push([name[i], plate_num[i]]);
}

let plate_sort = plate_num.sort();
// console.log(plate_sort);
let result = [];
for (let i = 0; i < name.length; i++) {
  for (let j = 0; j < plate.length; j++)
    if (plate_sort[i] === obj1[j][1]) {
      result.push([obj1[j][0]]);
    }
}
console.log(result.join(" "));
console.log(plate_sort);
