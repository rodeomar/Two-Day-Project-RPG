import Board from './../src/board.js';

describe('Board', () => {
  test('should correctly create a board object with three empty arrays inside', () => {
    const board = new Board();
    expect(board.stage).toEqual([1]);
    expect(board.p1Discard).toEqual([1]);
    expect(board.p2Discard).toEqual([1]);
  });

});