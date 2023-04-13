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
  chooseDeck(deck1, deck2) {
    
  }

  makeDeck(array1, array2) {

  }

}