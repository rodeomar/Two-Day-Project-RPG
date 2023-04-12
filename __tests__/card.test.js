import Card from './../src/card.js';

describe('Card', () => {

  test('should correctly create a card object with a name, type, power, defense, and ability', () => {
    const card = new Card("rocky", "rock", 5, 5, "placeholder");
    expect(card.name).toEqual("rocky");
    expect(card.type).toEqual("rock");
    expect(card.power).toEqual(5);
    expect(card.def).toEqual(5);
    expect(card.ability).toEqual("placeholder");
  });
  test('should correctly determine if a power is greater than another defense', () => {
    const card1 = new Card("rocky", "rock", 5, 5, "placeholder");
    const card2 = new Card("rocko", "rock", 5, 4, "placeholder");
    expect(card1.cardFight(card2)).toEqual("card1 wins");
  });
});



