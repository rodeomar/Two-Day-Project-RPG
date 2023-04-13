import {Card, rockCollection, paperCollection, scissorCollection} from './../src/card.js';

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
    this.deck = array1.concat(array2);
    return this.deck;
  }

}