let player = {
    playerName: "Player",
    chips: '€100',
}
let cards = []
let hasBlackJack = false;
let sum = 0;
let isAlive = false;
let message = '';
let messageEl = document.getElementById('message-el')
let sumEl = document.getElementById('sum-el')
let cardEl = document.getElementById('cards-el')
let playerEL = document.getElementById('player-el')




playerEL.textContent = player.playerName + ': ' + player.chips;

function randomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1;
    { randomNumber === 1 ? 11 : randomNumber === 11 ? 10 : randomNumber === 13 ? 10 : randomNumber }
    return randomNumber
}


function startGame() {
    let firstCard = randomCard();
    let secondCard = randomCard();
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard;
    isAlive = true;

    rendertGame()
}

function rendertGame() {
    cardEl.textContent = "Cards: " + cards;
    /* for (let i = 0; i < cards.lenght; i++) {
         cardEl.textContent += cards[i] + ' '
     }*/

    sumEl.textContent = "Sum: " + sum;

    {
        sum <= 20 ? (hasBlackJack = false, message = 'Want another card?') :
            sum === 21 ? (hasBlackJack = true, message = 'YOU WON! BLACKJACK!!!') :
                sum > 21 ? (isAlive = false, message = 'You lose :( !') : sum;
    }

    messageEl.textContent = message
    console.log(message);
    console.log(hasBlackJack);
}

function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = randomCard();
        sum += card;
        cards.push(card)

        rendertGame()
    }
}












/*
console.log(4 === 3)  // 
console.log(5 > 2)    // 
console.log(12 > 12)  //
console.log(3 < 0)    //
console.log(3 >= 3)   // 
console.log(11 <= 11) //
console.log(3 <= 2)   //
*/