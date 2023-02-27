let player = {
    name : "Aryush",
    chips : 200,
}

player.sayHello;

let sum = 0;
let cards = [];

let hasBlackJack = false;
let isAlive = true;

let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let playerEl = document.getElementById("player-el");

playerEl.textContent = player.name + " : $" + player.chips;

function randomCard(){
    let randomNumber =  (Math.floor(Math.random()*13)+1);
    if(randomNumber >= 10){
        return 10;
    } else if(randomNumber == 1){
        return 11;
    }
    else{
        return randomNumber;
    }
}

const startGame = () =>{
    isAlive = true;
    let firstCard = randomCard();
    let secondCard = randomCard();
    sum = firstCard + secondCard;
    cards = [firstCard,secondCard];
    renderGame();
}

const renderGame = () =>{

    cardsEl.textContent = "Cards: ";
    for(let i=0;i<cards.length;i++){
        cardsEl.textContent += cards[i] + " ";
    }

    if (sum<=20){
        message = "Do you want to draw a new card?";
    } else if(sum === 21){
        message = "You've got Blackjack!";
        hasBlackJack = true;
    } else{
        message = "You're out of the game!";
        isAlive = false;
        // document.getElementById("btn-2").disabled = true;
    }

    messageEl.textContent = message;
    sumEl.textContent = "Sum: " + sum;
}

const newCard = () =>{
    if(isAlive === true && hasBlackJack === false){
        let newCard = randomCard();
        sum += newCard;
        cards.push(newCard);
        renderGame();
    }
}
