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
});
