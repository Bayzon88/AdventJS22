// /\* [
//     "*****\\n*cat*\\n*****",
//     "******\\n*game*\\n******",
//     "*******\\n*socks*\\n*******"
//     ] \*/

function wrapping(gifts) {
  let wrappedGifts = gifts.map((gift) => {
    let giftLength = gift.length;
    //Create "*" for start and end
    let asterisk = "";
    for (let i = 0; i < giftLength + 2; i++) {
      asterisk += "*";
    }

    return asterisk + "\n*" + gift + "*\n" + asterisk;
  });

  return wrappedGifts;
}

const gifts = ["cat", "game", "socks"];
const wrapped = wrapping(gifts);
console.table(wrapped);
