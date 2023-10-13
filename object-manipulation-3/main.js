console.log('Lodash is loaded:', typeof _ !== 'undefined');
function startGame(allPlayers, perHand) {

  const players = [];
  players.length = allPlayers.length;
  for (let i = 0; i < allPlayers.length; i++) {
    players[i] = {};
    players[i].name = allPlayers[i];
    players[i].hand = [];
  }

  const cards = [];
  const suit = ['Clubs', 'Diamonds', 'Hearts', 'Spades'];
  const rank = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];
  for (let i = 0; i < suit.length; i++) {
    for (let j = 0; j < rank.length; j++) {
      const object = { rank: '', suit: '' };
      object.rank = rank[j];
      object.suit = suit[i];
      cards.push(object);
    }
  }

  function shuffle() {
    for (let i = 0; i < 52; i++) {
      const rand = Math.floor(Math.random() * 52);
      const x = cards[i];
      cards[i] = cards[rand];
      cards[rand] = x;
    } return cards;
  }

  shuffle();
  console.log(shuffle());

  for (let i = 0; i < perHand; i++) {
    for (let j = 0; j < players.length; j++) {
      players[j].hand.push(cards[i + j]);
    }
  }

  function score(index) {
    let score = 0;
    const ten = ['Jack', 'Queen', 'King'];
    for (let i = 0; i < perHand; i++) {
      const indexRank = players[index].hand[i].rank;
      if (ten.includes(indexRank)) {
        score += 10;
      } else if (indexRank === 'Ace') {
        score += 11;
      } else {
        score += indexRank;
      }
    }
    return score;
  }

  const winners = [];
  const totalScore = [];
  for (let i = 0; i < players.length; i++) {
    totalScore.push(score(i));
  }
  console.log(totalScore);
  const winningScore = Math.max(...totalScore);
  let winner = totalScore.indexOf(winningScore);
  while (winner !== -1) {
    winners.push(winner);
    winner = totalScore.indexOf(winningScore, winner + 1);
  }
  if (winners.length === 1) {
    console.log(players[winners[0]]);
  } else {
    console.log('run a tie-breaker');
    const winnersName = [];
    for (let i = 0; i < winners.length; i++) {
      winnersName.push(players[winners[i]].name);
    }
    console.log(winnersName);
    startGame(winnersName, perHand);
  }
}
startGame(['Tiffany', 'Ed', 'Ye', 'Phuong'], 1);
