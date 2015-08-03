// var dice = {
//   rolled: null,
//   diceRoll: function(){
//     this.rolled = Math.floor(Math.random() * 6)
//   }
// }

// dice.diceRoll();
// console.log(dice.rolled)


var dice = {
  rolled: [],
   diceRoll: function(numberOfDice){
    var newArray = [];
    for(var i=0; i<numberOfDice; i++){
      newArray.push(Math.floor(Math.random() * 6));
    }
    this.rolled = newArray;
   }
 }

 dice.diceRoll(3);
 console.log(dice.rolled)
