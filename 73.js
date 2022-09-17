const graph = {
  A: ["B", "C"],
  B: ["A", "D", "E"],
  C: ["A", "F"],
  D: ["B"],
  E: ["B", "F"],
  F: ["C", "E"],
};

//최단경로는 결국 한가지 
//A C F 

// 최단경로를 찾을 두 거점을 정한다.
const user_input = prompt("입력해주세요").split(" ");
const start = user_input[0];
const end = user_input[1];

let queue = [start];
//큐에 A부터 들어간다
let visited = [start];
//들어갔다 온것에 A도 들어있다.. 그러면 

function solution() {
  let count = -1;
  //기본으로 들어있는 A를 제외하기 위해 .. 최단거리에 스타트는 포함이 되지 않는다. 
  //최단거리를 구하기 위해서는 A랑 연결되어 있는 B 와 C를 봐야한다. 

  while (queue.length !== 0) {
    count += 1;
    console.log(queue);
    let size = queue.length;

    for (let i = 0; i < size; i++) {
      let node = queue.splice(0, 1);
    
      if (node == end) {
        return count;
      }
      //큐에 들어있는걸 splice해서 마지막이 요소가 end와 같으면 count +1해라 

      for (let next_node in graph[node]) {
        if (!visited.includes(graph[node][next_node])) {
          visited.push(graph[node][next_node]);
          queue.push(graph[node][next_node]);
        }
      }
    }
  }
}
console.log(solution());
