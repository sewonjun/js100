const ingredient = [1, 2, 1, 2, 3, 1, 3, 1, 1, 2, 3, 1];

function solution(ingredient) {
  let copyingredient = [...ingredient];
  var answer = 0;
  for (let i = 0; i < copyingredient.length - 3; i++) {
    console.log(i);
    if (copyingredient[i] === 1 && copyingredient[i + 3] === 1) {
      if (copyingredient[i + 1] === 2 && copyingredient[i + 2] === 3) {
        copyingredient = copyingredient.slice(i, i + 4).join("");
        console.log(copyingredient);
        // copyingredient.splice(i, 4);
        i = -1;
        answer += 1;
        continue;
      } else {
        i += 2;
        continue;
      }
    }
  }
  return answer;
}

solution(ingredient);
