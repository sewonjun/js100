//우리 태양계를 이루는 행성은 수성, 금성, 지구, 화성, 목성, 토성, 천왕성이 있다. 이 행성들의 영어 이름은 Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune이다. 행성 이름을 영어 이름으로 반환하는 프로그램을 만드시오!

const planet = {
  수성: "Mercury",
  금성: "Venus",
  지구: "Earth",
  화성: "Mars",
  목성: "Jupiter",
  토성: "Saturn",
  천왕성: "Uranus",
  해왕성: "Neptune",
};

const planetname = prompt();
console.log(planet[planetname]);
