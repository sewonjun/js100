function solution(bridge_length, weight, truck_weights) {
  const answer = 0;
  const passing_bridge = new Array(bridge_length).fill(0);
  const passed_bridge = [];
  let count = 0;
  const init = 0;
  let weight_passing = () => passing_bridge.reduce((a, b) => a + b, init);
  passing_bridge[bridge_length - 1] = truck_weights.shift();
  while (truck_weights.length > 0) {
    if (weight < weight_passing() + Number(truck_weights.slice(0, 1))) {
      passed_bridge.push(passing_bridge.shift());
      if (weight < weight_passing() + Number(truck_weights.slice(0, 1))) {
        passing_bridge.push(0);
      } else {
        passing_bridge.push(truck_weights.shift());
      }
    } else {
      passing_bridge.push(truck_weights.shift());
      passed_bridge.push(passing_bridge.shift());
    }

    console.log(`truck_weights : ${truck_weights}`);
    console.log(weight_passing());
    console.log(`passing_bridge: ${passing_bridge}`);
    console.log(`passed_bridge: ${passed_bridge}`);
    console.log(`count${count}`);
  }

  if (passing_bridge.length > 0) {
    passed_bridge.push(...passing_bridge);
  }
  console.log(`passed_bridge: ${passed_bridge}`);
  console.log(passed_bridge.length + 1);
  return answer;
}
// const bridge_length = 2;
// const weight = 10;
// const truck_weights = [7, 4, 5, 6];

// const bridge_length = 100;
// const weight = 100;
// const truck_weights = [10];

const bridge_length = 100;
const weight = 100;
const truck_weights = [10, 10, 10, 10, 10, 10, 10, 10, 10, 10];
console.log(solution(bridge_length, weight, truck_weights));
