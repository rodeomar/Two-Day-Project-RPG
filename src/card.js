export default class Card {
  constructor(name, type, power, def, ability) {
    this.name = name;
    this.type = type;
    this.power = power;
    this.def = def;
    this.ability = ability;
  }

  cardFight(card2) { 
    if ((this.type === "rock") && (card2.type === "scissor") || (this.type === "paper") && (card2.type === "rock") || (this.type === "scissor") && (this.card2 === "paper")) {
      this.power++;
    } if ((this.power > card2.def) && (card2.power > this.def) || (this.power === card2.def) && (card2.power === this.def)) {
      return "tie";
    } else if (this.power > card2.def) {
      return "card1 wins";
    } else if (card2.power > this.def) {
      return "card2 wins";
    }
  }
}



// const card1 = new Card();
// const card2 = new Card();

// export default class Card {
//   constructor(name, power, def, type, ability) {
//     this.name = name;
//     this.power = power;
//     this.def = def;
//     this.type = type;
//     this.ability = ability;
//   }

//   checkType() {
//     return "I can't answer that yet!";
    
//   }
//