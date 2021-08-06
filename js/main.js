/*
* Dice Game by Emon Khan
* Date: 06/08/2021
*/

// Select element
let player1 = document.querySelector('#player1');
let player2 = document.querySelector('#player2');


function diceGame() {
    // Function for player1 
    let valueOfPlayer1 = Math.floor((Math.random() * 6) + 1);

    switch (valueOfPlayer1) {
        case 1:
            player1.setAttribute('src', './img/dice1.png');
            break;
        case 2:
            player1.setAttribute('src', './img/dice2.png');
            break;
        case 3:
            player1.setAttribute('src', './img/dice3.png');
            break;
        case 4:
            player1.setAttribute('src', './img/dice4.png');
            break;
        case 5:
            player1.setAttribute('src', './img/dice5.png');
            break;
        case 6:
            player1.setAttribute('src', './img/dice6.png');
            break;
        default:
            player1.setAttribute('src', './img/start.png');
    }

    // Function for player2 
    let valueOfPlayer2 = Math.floor((Math.random() * 6) + 1);

    switch (valueOfPlayer2) {
        case 1:
            player2.setAttribute('src', './img/dice1.png');
            break;
        case 2:
            player2.setAttribute('src', './img/dice2.png');
            break;
        case 3:
            player2.setAttribute('src', './img/dice3.png');
            break;
        case 4:
            player2.setAttribute('src', './img/dice4.png');
            break;
        case 5:
            player2.setAttribute('src', './img/dice5.png');
            break;
        case 6:
            player2.setAttribute('src', './img/dice6.png');
            break;
        default:
            player2.setAttribute('src', './img/start.png');
    }

    // Dice result condition
    let result = document.querySelector('#result');
    if(valueOfPlayer1 == valueOfPlayer2){
        result.innerHTML = "Game Draw :)";
        result.style.color = 'red';
    } else if(valueOfPlayer1 > valueOfPlayer2){
        result.innerHTML = "Player1 Won";
        result.style.color = 'green';
    }else{
        result.innerHTML = 'Player2 won';
        result.style.color = 'green';
    }



}