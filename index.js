// // Code your solutions in this file



// for (let age = 30; age < 40; age++) {
//     console.log(`I'm ${age} years old. Happy birthday to me!`);

//   }

//   const gifts = ["teddy bear", "drone", "doll"];

//   function wrapGifts(gifts) {
//     for(i = 0; i < gifts.length; i++) {
//         console.log( `Wrapped ${gifts[i]} and added a bow!`);

//     }
// return gifts;
//   }


// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts) {
//   let i = 0; // the initialization moves OUTSIDE the body of the loop!
//   while (i < gifts.length) {
//     console.log(`Wrapped ${gifts[i]} and added a bow!`);
//     i++; // the iteration moves INSIDE the body of the loop!
//   }

//   return gifts;
// }
//   wrapGifts(gifts);





function writeCards(names, event) {
    const array =[];
    for (let i = 0; i < names.length; i++) {
      const messages = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
      array.push(messages);
    }
    return array;

  }



  function countDown(num) {
    let i = 0
        while ( num > -1 ) {
          console.log(num);
         num--;
        }

          }





