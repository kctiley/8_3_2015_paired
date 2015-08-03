var dice = {
  rolled: null,
  diceRoll: function(){
    this.rolled = Math.floor(Math.random() * 6)
  }
}

dice.diceRoll();
console.log(dice.rolled)


