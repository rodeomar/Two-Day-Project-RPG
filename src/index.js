import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

import Player from './player.js';
import Board from './board.js';
import  { Card, paperCollection, rockCollection, scissorCollection } from './card.js';




// Card;
const board = new Board();
const player1 = new Player(0, 0);
const player2 = new Player(0, 0);

function getDecks(event) {
  event.preventDefault();
  let select1 = document.getElementById("deck-select1").value;
  switch (select1) {
  case ("rock"):
    select1 = rockCollection;
    break;
  case ("paper"):
    select1 = paperCollection;
    break;
  case ("scissors"):
    select1 = scissorCollection;
  }
  let select2 = document.getElementById("deck-select2").value;
  switch (select2) {
  case ("rock"):
    select2 = rockCollection;
    break;
  case ("paper"):
    select2 = paperCollection;
    break;
  case ("scissors"):
    select2 = scissorCollection;
  }
  
  player1.makeDeck(select1, select2);
  console.log(player1);

  let select3 = document.getElementById("deck-select3").value;
  switch (select3) {
  case ("rock"):
    select3 = rockCollection;
    break;
  case ("paper"):
    select3 = paperCollection;
    break;
  case ("scissors"):
    select3 = scissorCollection;
  }
  let select4 = document.getElementById("deck-select4").value;
  switch (select4) {
  case ("rock"):
    select4 = rockCollection;
    break;
  case ("paper"):
    select4 = paperCollection;
    break;
  case ("scissors"):
    select4 = scissorCollection;
  }

  player2.makeDeck(select3, select4);
  
  console.log(player2);
}





function pushCards(event) {
  event.preventDefault();  
  function pushCards() {
    board.stage.push(player1.deck.shift());
    board.stage.push(player2.deck.shift());
  }
  pushCards();
  console.log(board.stage);
  
  let cardOne = board.stage[0];
  let cardTwo = board.stage[1];

  cardOne.cardFight(cardTwo);
  console.log(cardOne.cardFight(cardTwo));

  board.p1Discard.push(board.stage.shift([0]));
  board.p2Discard.push(board.stage.shift([1]));
  player2.roundOver();
  console.log(board);
  
}

// document.querySelector("#deck-selector").addEventListener("submit", gatherPlayers);
document.querySelector("#deck-selector").addEventListener("submit", getDecks);
