function solution(name, yearning, photo) {
  const yearningWithName = {};

  for (let i = 0; i < name.length; i++) {
    yearningWithName[name[i]] = yearning[i];
  }

  const answer = [];

  photo.forEach((eachPhoto) => {
    let sumYearning = 0;

    for (let name of eachPhoto) {
      if (yearningWithName[name]) {
        sumYearning += yearningWithName[name];
      }
    }
    answer.push(sumYearning);
  });

  return answer;
}
