export default class Player {
  constructor(deck, discard, points, lead, bet) {
    this.deck = deck;
    this.discard = discard;
    this.points = points;
    this.lead = lead;
    this.bet = bet;
  }
}