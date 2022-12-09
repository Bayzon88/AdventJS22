const packOfGifts = ["book", "doll", "ball"];
const reindeers = ["dasher", "dancer"];

function distributeGifts(packOfGifts, reindeers) {
  let packWeight = 0;
  packOfGifts.forEach((pack) => (packWeight += pack.length));

  let reindeerWeightLimit = 0;
  reindeers.forEach((reindeer) => (reindeerWeightLimit += reindeer.length * 2));

  return Math.floor(reindeerWeightLimit / packWeight, 0);
}
console.log(distributeGifts(packOfGifts, reindeers));
