// Code your solutions in this file



for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
    
  }

  const gifts = ["teddy bear", "drone", "doll"];

  function wrapGifts(gifts) {
    for(i = 0; i < gifts.length; i++) {
        console.log( `Wrapped ${gifts[i]} and added a bow!`);
       
    }
return gifts;
  }

  wrapGifts(gifts);

const thankYou = ['Charlie', 'Sam', 'Ali']

function writeCards(name,event) {
    for( i = 0; i < thankYou.length; i++ ) {
    console.log(`Thank you ${thankYou[i]} for the wonderful birthday gift!`);
     };
 return thankYou
};

writeCards(thankYou);

let count = 10;
while( count > 0) {
console.log( `${count} more to go !`);
count--;
};

function countDown(num) {
   while( num > -1) {
        console.log(`${num} more to go!`);
    num--;
    };
};

countDown(10);