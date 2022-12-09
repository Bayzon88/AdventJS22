const boxes = [
  { l: 1, w: 1, h: 1 },
  { l: 3, w: 1, h: 3 },
  { l: 2, w: 2, h: 2 },
];

function fitsInOneBox(boxes) {
  let result = [];
  //create array with volume and index of each box
  let boxesVolume = [];
  boxes.forEach((box, index) => {
    boxesVolume.push({ volume: box.l * box.w * box.h, index: index });
  });
  //Sort boxes by volume
  let sortedBoxes = boxesVolume.sort((a, b) => a.volume - b.volume);

  //Evaluate if each box can fit inside of the next box
  for (let i = 0; i < boxes.length - 1; i++) {
    let current = boxes[sortedBoxes[i].index];
    let next = boxes[sortedBoxes[i + 1].index];
    //Check true if all current dimensiones are lower than next box's dimension
    if (current.l < next.l && current.w < next.w && current.h < next.h) {
      result.push(true);
    } else {
      result.push(false);
    }
  }

  //return unique result
  return result.every((element) => element === true);
}

console.log(fitsInOneBox(boxes));
