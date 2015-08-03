// var dice = {
//   rolled: null,
//   diceRoll: function(){
//     this.rolled = Math.floor(Math.random() * 6+1)
//   }
// }

// dice.diceRoll();
// console.log(dice.rolled)


// var dice = {
//   rolled: [],
//    diceRoll: function(numberOfDice){
//     var newArray = [];
//     for(var i=0; i<numberOfDice; i++){
//       newArray.push(Math.floor(Math.random() * 6+1));
//     }
//     this.rolled = newArray;
//    }
//  }

//  dice.diceRoll(3);
//  console.log(dice.rolled)


// var dice = {
//   rolled: [],
//    diceRoll: function(numberOfDice, sidesOfDice){
//     var newArray = [];
//     for(var i=0; i<numberOfDice; i++){
//       newArray.push(Math.floor(Math.random() * sidesOfDice + 1));
//     }
//     this.rolled = newArray;
//    }
//  }

//  dice.diceRoll(3, 8);
//  console.log(dice.rolled)

// Using Constructor
// function Dice(){
//   this.value = null;
//   this.rollDice = function(){
//     this.value = Math.floor(Math.random() * 6+1)
//   };
// }

// var dice1 = new Dice();
// dice1.rollDice();
// console.log(dice1.value);


function Dice(){
  this.value = [];
  this.rollDice = function(numberOfDice){
    var newArray = [];
    for(var i=0; i<numberOfDice; i++){
      newArray.push(Math.floor(Math.random() * 6+1));
    };
    this.value = newArray;
   };
}

var dice1 = new Dice();
dice1.rollDice(15);
console.log(dice1.value);








