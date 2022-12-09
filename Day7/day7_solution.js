const a1 = ["bike", "car", "bike", "bike"];
const a2 = ["car", "bike", "doll", "car"];
const a3 = ["bike", "pc", "pc"];

function getGiftsToRefill(a1, a2, a3) {
  let result = [];
  /*** If there is an item only present in 1 store, it needs to be replenished 
    The action is driven by how many stores has it, not by how much stock is in each store **/
  result.push(a1, a2, a3);

  console.log(result.length);
  for (let i = 0; i < result.length; i++) {
    for (let j = 0; j < result.length; j++) {
      if (result[i] !== result[j]) {
        console.log(result[i].filter((element) => !result[j].includes(element)));
      }
    }
  }

  //1) Get unique items of each store
  let union = [...new Set([...a1, ...a2, ...a3])];

  //2) Look for the unique items in each array
  let solution = [];
  for (let i = 0; i < result.length; i++) {
    union.forEach((element) => {
      if (!result[i].includes(element)) {
        //Item not included will be pushed to the solution array
        solution.push(element);
      }
    });
  }

  //3) return duplicated elements(missing from 1 or more stores)
  result = solution.filter((element, index) => solution.indexOf(element) != index);

  return result.sort();
}

console.log(getGiftsToRefill(a1, a2, a3));
