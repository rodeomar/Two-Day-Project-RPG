# (Application Name)

#### A Song of Scissors, Boulders, and Parchment

#### By (Your Name Here)

## Technologies Used

* JavaScript
* HTML
* css
* Webpack
* JEST
* NPM
* Babel
* eslinter
## Description

This is a Game played out over 3 sets. 

The  winner is determined by best 2 sets out of 3.

A set is played out in Rounds where two players draw from their own 30 card decks between 3-5 times.

Each time/rep the players compare the card qualities of the cards they drew, and a winner/loser is determined for the set based on card Power and Defense 1/5-5/5.

Players earn points over the course of rounds determined by how many reps they won (3-5). The trailing player may bet points on a round to earn more points before their deck runs out.

A set ends when a player runs out of cards in their deck. The winner of a set is determined by who has the most points in a round.

Players choose which decks to play with by shuffling two 15-card factions together.

Factions are: Rocks, Paper, and Scissors. Each faction deck is distributed like so:
1 5/5
2 4/5
3 3/5
4 2/5
5 1/5

Card wins and losses work like so: 
5/5 beats 4/5 and below, and so on.
(Tie resolution TBD)

Factions have advantage over other factions:
5/5 Paper vs. 5/5 Rock = Paper is 6/5; 5/5 Rock vs. 5/5 Paper = Rock is 4/5.
and so on for Scissors vs. Paper; Rock vs. Scissors.

To nuance this, factions have abilities. Rocks can raise their defense. Paper can raise their attack. Scissors can manipulate stats in other ways.

## Setup/Installation Requirements

* Installing all packages with $ npm install.
* Building the project using webpack with $ npm run build
* Starting a development server with $ npm run start
* Linting JS files in the src folder with $ npm run lint
* Running tests with Jest using $ npm run test
* IMPORTANT: You need to install Jest and Babel, too. 
--> Use: $ npm install jest@24.9.0 --save-dev
    and add "test": "jest" under "scripts" in package.json
--> Use: $ npm install @babel/core@7.18.6 --save-dev
--> Use: $ npm install @babel/plugin-transform-modules-commonjs@7.18.6 --save-dev


## Known Bugs

* _Any known issues_
* _should go here_

## License