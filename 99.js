let durability = [1, 3, 1, 4, 5, 3];
let rabbitJump = [2, 1, 3, 1];
let result = [];

for (let j = 0; j < rabbitJump.length; j++) {
  //토끼 점프력
  let e = rabbitJump[j];
  //i를 몇번 반복할지 알기위해 토끼 점프력으로 내구성 배열의 길이를 나눈다.
  let dLength = Math.floor(durability.length / e);
  let array1 = [];
  for (i = 1; i < dLength; i++) {
    //rabbitJump 만큼 숫자만큼 건너뛰면서 빼주기.
    durability[e * i - 1] -= e;
    //근데 만약 거쳐간 배열중에 0보다 작은 숫자가 있다면.. array1로 push하자.
    if (durability[e * i - 1] < 0) {
      array1.push(durability[e * i - 1]);
    }
  }
  //한번씩 돌고난뒤 배열..
  console.log(durability);
  //여기안에 하나 이상 무언가가 들어있으면.. 그것은 fail 아니면 pass
  if (array1.length > 0) {
    result.push("fail");
  } else {
    result.push("pass");
  }
}
console.log(result);
