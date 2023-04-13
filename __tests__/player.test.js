import Player from './../src/player.js';

describe('Player', () => {
  test('should correctly create a player object with a number of properties', () => {
    const player = new Player(0, 0);
    expect(player.deck).toEqual([]);
    expect(player.discard).toEqual([]);
    expect(player.points).toEqual(0);
    expect(player.lead).toEqual(false);
    expect(player.bet).toEqual(0);
  });

  test('should combine two arrays, array1 and array2', () => {
    const player = new Player(0, 0);
    const array1 = [1,2,3];
    const array2 = [4,5,6];
    expect(player.makeDeck(array1, array2)).toEqual([1,2,3,4,5,6]);
  });
  

});