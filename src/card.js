export class Card {
  constructor(name, type, power, def, ability) {
    this.name = name;
    this.type = type;
    this.power = power;
    this.def = def;
    this.ability = ability;
  }

  cardFight(card2) { 
    if ((this.type === "rock") && (card2.type === "scissor") || (this.type === "paper") && (card2.type === "rock") || (this.type === "scissor") && (card2.type === "paper")) {
      this.power++;
    } else if ((card2.type === "rock") && (this.type === "scissor") || (card2.type === "paper") && (this.type === "rock") || (card2.type === "scissor") && (this.type === "paper")) {
      card2.power++; 
    } if ((this.type === "rock") && (card2.type === "scissor") || (this.type === "paper") && (card2.type === "rock") || (this.type === "scissor") && (card2.type === "paper")) {
      --card2.power; 
    } else if ((card2.type === "rock") && (this.type === "scissor") || (card2.type === "paper") && (this.type === "rock") || (card2.type === "scissor") && (this.type === "paper")) {
      --this.power;
    } if ((this.power > card2.def) && (card2.power > this.def) || (this.power === card2.def) && (card2.power === this.def)) {
      return "tie";
    } else if (this.power > card2.def) {
      return "card1 wins";
    } else if (card2.power > this.def) {
      return "card2 wins";
    }
  }
}

let fiveStarRock = new Card ("five" , "rock", 5, 5, "placeholder"); 
  let fourStarRock = new Card("four" , "rock", 4, 4, "placeholder"); 
  let threeStarRock = new Card("three" , "rock",3 ,3, "placeholder"); 
  let twoStarRock = new Card("two" , "rock", 2, 2, "placeholder"); 
  let oneStarRock = new Card("one" , "rock", 1, 1, "placeholder"); 

  let fiveStarPaper = new Card("five", "paper", 5, 5, "placeholder");
  let fourStarPaper = new Card("four", "paper", 4 ,4, "placeholder");
  let threeStarPaper = new Card("three", "paper", 3, 3, "placeholder");
  let twoStarPaper = new Card("two", "paper", 2, 2, "placeholder");
  let oneStarPaper = new Card("one", "paper", 1, 1, "placeholder");

  let fiveStarScissor = new Card("five", "scissor", 5, 5, "placeholder");
  let fourStarScissor = new Card("four", "scissor", 4, 4, "placeholder");
  let threeStarScissor = new Card("three", "scissor", 3, 3, "placeholder");
  let twoStarScissor = new Card("two", "scissor", 2, 2, "placeholder");
  let oneStarScissor = new Card("one", "scissor", 1, 1,"placeholder");

  export const rockCollection = [fiveStarRock, fourStarRock, fourStarRock, threeStarRock, threeStarRock, threeStarRock, twoStarRock, twoStarRock, twoStarRock, twoStarRock, oneStarRock, oneStarRock, oneStarRock, oneStarRock, oneStarRock]
  
  export const paperCollection = [ fiveStarPaper, fourStarPaper, fourStarPaper, threeStarPaper, threeStarPaper, threeStarPaper, twoStarPaper, twoStarPaper, twoStarPaper, twoStarPaper, oneStarPaper, oneStarPaper, oneStarPaper,oneStarPaper, oneStarPaper]

  export const scissorCollection = [fiveStarScissor, fourStarScissor, fourStarScissor, threeStarScissor, threeStarScissor, threeStarScissor, twoStarScissor, twoStarScissor, twoStarScissor, twoStarScissor, oneStarScissor, oneStarScissor, oneStarScissor, oneStarScissor, oneStarScissor] 

  


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