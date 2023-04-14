// import Board from './board.js';
import { Card, rockCollection, paperCollection, scissorCollection } from './../src/card.js';

// Board;
Card;
rockCollection;
paperCollection;
scissorCollection;

export default class Player {
  constructor(points, bet) {
    this.deck = [];
    this.discard = [];
    this.points = points;
    this.lead = false;
    this.bet = bet;
  }

  makeDeck(array1, array2) {
    this.deck = [];
    if (this.deck.length ) {
      this.deck = array1.concat(array2);
      return this.deck;
    }
  }

  roundOver() {
    if (this.deck === []) {
      return "round over!" + " " + "start a new round";
    }
  }
}

