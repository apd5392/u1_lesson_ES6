const evens = [2, 4, 6, 8];

const moreEvens = [...evens, 10, 12, 14, 206];

const oddNums = [1, 3, 5, 9];

const moreOdds = [...oddNums, 13, 15, 19, 407];

const numbers = [...moreEvens, ...moreOdds, 42, 64, 24];

console.log(numbers);

const nfcEast = ["Eages", "NY Giants", "Cowboys", "Commanders"];
const nfcSouth = ["Falcons", "Panthers", "Saints", "Buccaneers"];
const nfcNorth = ["Bears", "Vikings", "Lions", "Packers"];
const nfcWest = ["Cardinals", "Rams", "49ers", "SeaHawks"];
const nfcDivision = [...nfcEast, ...nfcSouth, ...nfcNorth, ...nfcWest];

console.log(nfcDivision);

const people = {
  JayZ: { shirt: "goldfish" },
  Drake: { shirt: "David Hasselhoff" },
  JohnMaster: { shirt: "button down" },
};

const otherPeople = {
  Jason: { shirt: "coffee" },
  Mimi: { shirt: "wonder woman" },
};

const allPeople = {
  ...people,
  ...otherPeople,
};

console.log(allPeople);
