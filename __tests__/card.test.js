import Card from './../src/card.js';

describe('Card', () => {
  test('should correctly create a card object with a name'), () => {
    const card = new Card(rock);
    expect(card.name).toEqual("rock");
  };
});
