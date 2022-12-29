// const people = [70, 50, 80, 50];
// const people = [70, 80, 50];
const people = [40, 50, 40, 90, 100]; //3
const limit = 150;

// 효울성테스트 통과 못함
function solution(people, limit) {
  let answer = 0;
  const sortPeople = people.sort((a, b) => a - b);
  function boat(person, i) {
    sortPeople[i] = "";
    const weightAble = limit - person;
    const ablePeople = sortPeople.filter(
      (weight) => weight !== "" && weight <= weightAble
    );
    if (ablePeople.length > 0) {
      const joinPerson = ablePeople.at(-1);
      const joinIdx = sortPeople.indexOf(joinPerson);
      sortPeople[joinIdx] = "";
      answer += 1;
    } else {
      sortPeople[i] = "";
      answer += 1;
    }
  }
  for (let i = 0; i < sortPeople.length; i++) {
    person = sortPeople[i];
    if (person === "") continue;
    boat(person, i);
  }
  return answer;
}

console.log(solution(people, limit));
