const maps = [
  [1, 0, 1, 1, 1],
  [1, 0, 1, 0, 1],
  [1, 0, 1, 1, 1],
  [1, 1, 1, 0, 1],
  [0, 0, 0, 0, 1],
];
function solution(maps) {
  var answer = 0;
  maps.forEach((array) => {
    for (let i = 0; i < array.length; i++) {
      if (array[i] === 0) {
        array[i] = "X";
      }
    }
  });
  // const start = maps[0][0] = 'S';
  maps[4][4] = "E";
  console.log(maps);
  game();
  function game() {
    // while(current === -1 && current === 'E'){
    let [row, column] = [0, 0];
    let current = maps[row][column];
    let temp = {};
    let direction = {};
    console.log(current);
    const right = maps[row][column + 1];
    const bottom = maps[row + 1][column];
    const top = row === 0 ? undefined : maps[row - 1][column];
    function ableToGo(element) {
      if (element === undefined || element === "X") {
        return "unable";
      } else if (element === 1) {
        return "able";
      }
    }
    ableToGo(right) === "able"
      ? (temp["right"] = "able")
      : (temp["right"] = "unable");
    ableToGo(bottom) === "able"
      ? (temp["bottom"] = "able")
      : (temp["bottom"] = "unable");
    ableToGo(top) === "able"
      ? (temp["top"] = "able")
      : (temp["top"] = "unable");
    console.log(temp);
    let verifiedPath = [];

    for (const [key, value] of Object.entries(temp)) {
      if (value === "able") {
        verifiedPath.push(key);
      }
    }
    console.log(verifiedPath);

    // }
  }
  // return answer;
}

console.log(solution(maps));

//일단 어떤 방향으로 갈 수 있는지 나오는 함수
// function game() {
//     // while(current === -1 && current === 'E'){
//     let [row, column] = [0, 0];
//     let current = maps[row][column];
//     let temp = {};
//     console.log(current);
//     const right = maps[row][column + 1];
//     const bottom = maps[row + 1][column];
//     const top = row === 0 ? undefined : maps[row - 1][column];
//     function ableToGo(element) {
//       if (element === undefined || element === "X") {
//         return "unable";
//       } else if (element === 1) {
//         return "able";
//       }
//     }
//     ableToGo(right) === "able"
//       ? (temp["right"] = "able")
//       : (temp["right"] = "unable");
//     ableToGo(bottom) === "able"
//       ? (temp["bottom"] = "able")
//       : (temp["bottom"] = "unable");
//     ableToGo(top) === "able"
//       ? (temp["top"] = "able")
//       : (temp["top"] = "unable");
//     console.log(temp);
//     let verifiedPath = [];

//     for (const [key, value] of Object.entries(temp)) {
//       if (value === "able") {
//         verifiedPath.push(key);
//       }
//     }
//     console.log(verifiedPath);

//     // }
//   }
