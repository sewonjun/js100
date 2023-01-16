function solution(k, dungeons) {
  const countedDungeonsAble = [];
  for (let i = 0; i < dungeons.length; i++) {
    const [powerNeeded, powerWasted] = dungeons[i];
    const usedK = k - powerWasted;
    const dungeonsArray = dungeons.slice(i + 1);
    countedDungeonsAble.push(
      [powerNeeded, powerWasted],
      countDundgeons(usedK, dungeonsArray)
    );
  }
  function countDundgeons(power, dungeonsArray) {
    const temp = [];
    let count = 0;
    for (let i = 0; i < dungeonsArray.length; i++) {
      const [powerNeeded, powerWasted] = dungeonsArray[i];
      if (power >= powerNeeded) {
        count += 1;
        temp.push(dungeonsArray[i]);
        const usePower = power - powerWasted;
        count += countDundgeons(usePower, dungeonsArray.slice(i + 1));
      } else {
        return count;
      }
    }
  }
}

const k = 40;
const dungeons = [
  [40, 20],
  [10, 10],
  [10, 10],
  [10, 10],
  [10, 10],
];

console.log(solution(k, dungeons));
