let fs = require('fs');
const filePath = process.platform === "linux" ? "./dev/stdin" : "예제.txt"
let input =
fs.readFileSync(filePath)
.toString()
.trim()
.split('\n');

const [N, M, V] = input[0].split(' ').map(Number); //N 정점의 갯수, V 정점을 시작할 번호
const edges = input.slice(1).map((str) => str.split(' ').map(Number));

const graph = Array.from({ length: N + 1 }, () => []);

for (let [v1, v2] of edges) {
  graph[v1].push(v2);
  graph[v2].push(v1);
}

graph.forEach((list) => list.sort((a, b) => a - b));

function dfs(v, visited, result) {
  console.log(v)
  visited[v] = true;
  result.push(v);
  console.table(graph);
  for (let next of graph[v]) {
    if (!visited[next]) {
      dfs(next, visited, result);
    }
  }
}

function bfs(v, visited, result) {
  const queue = [v];
  visited[v] = true;

  while (queue.length) {
    const cur = queue.shift();
    result.push(cur);

    for (let next of graph[cur]) {
      if (!visited[next]) {
        visited[next] = true;
        queue.push(next);
      }
    }
  }
}

const visited = Array(N + 1).fill(false);
const dfsResult = [];
dfs(V, visited, dfsResult);

visited.fill(false);
const bfsResult = [];
bfs(V, visited, bfsResult);

console.log(dfsResult.join(' '));
console.log(bfsResult.join(' '));


