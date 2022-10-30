// Play against the computer, so begin with a function called getComputerChoice that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’

let playerScore = 0
let compScore = 0 

const rockButton = document.querySelector('.rock')
const paperButton = document.querySelector('.paper')
const scissorsButton = document.querySelector('.scissors')
const outcomeDiv = document.querySelector('.outcome')
const playerScoreSpan = document.querySelector('.player-score')
const compScoreSpan = document.querySelector('.comp-score')

function getComputerChoice () {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)]
}

// Write a function that plays a single round of Rock Paper Scissors. 
// The function should take two parameters - the playerSelection and computerSelection - 
// and then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"

function playRound (playerSelection, computerSelection) {
    // This can be shorten to the following
    // if (playerSelection === computerSelection) {
    //     return `You tied! You both picked ${playerSelection}!`
    // }
    if (playerSelection === 'rock' && computerSelection === 'rock') {
        const p = document.createElement('p')
        p.innerText = `You tied! You both picked ${playerSelection}!`
        outcomeDiv.appendChild(p)
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        compScore++
        const p = document.createElement('p')
        p.innerText = 'You lose! Paper beats rock!'
        outcomeDiv.appendChild(p)
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        playerScore++
        const p = document.createElement('p')
        p.innerText = 'You win! Rock beats scissors!'
        outcomeDiv.appendChild(p)
    } else if (playerSelection === 'paper' && computerSelection === 'paper]') {
        const p = document.createElement('p')
        p.innerText = 'You tied! You both picked paper!'
        outcomeDiv.appendChild(p)
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        playerScore++
        const p = document.createElement('p')
        p.innerText = 'You win! Paper beats rock!'
        outcomeDiv.appendChild(p)
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        compScore++
        const p = document.createElement('p')
        p.innerText = 'You lose! Scissors beats paper!'
        outcomeDiv.appendChild(p)
    } else if (playerSelection === 'scissors' && computerSelection === 'scissors') {
        const p = document.createElement('p')
        p.innerText = 'You tied! You both picked scissors!'
        outcomeDiv.appendChild(p)
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        compScore++
        const p = document.createElement('p')
        p.innerText = 'You lose! Rock beats scissors!'
        outcomeDiv.appendChild(p)
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        playerScore++
        const p = document.createElement('p')
        p.innerText = 'You win! Scissors beats paper!'
        outcomeDiv.appendChild(p)
    }
}

const checkForWinner = (playerScore, compScore) => {
    if (playerScore === 5) {
        const h2 = document.createElement('h2')
        h2.classList.add('player-won')
        h2.innerText = `You won ${playerScore} to ${compScore} great job beating the computer!`
        outcomeDiv.append(h2)
    } 
    
    else if (compScore === 5) {
        const h2 = document.createElement('h2')
        h2.classList.add('computer-won')
        h2.innerText = `You lost ${playerScore} to ${compScore} try again!`
        outcomeDiv.append(h2)
    }
}

const updateScores = (playerScore, compScore) => {
    playerScoreSpan.innerText = `Player Score: ${playerScore}`
    compScoreSpan.innerText = `Computer Score: ${compScore}`
}

rockButton.addEventListener('click', () => {
    const computerSelection = getComputerChoice()
    const playerSelection = 'rock'
    playRound(playerSelection, computerSelection)
    updateScores(playerScore, compScore)
    checkForWinner(playerScore, compScore)
})

paperButton.addEventListener('click', () => {
    const computerSelection = getComputerChoice()
    const playerSelection = 'paper'
    playRound(playerSelection, computerSelection)
    updateScores(playerScore, compScore)
    checkForWinner(playerScore, compScore)
})

scissorsButton.addEventListener('click', () => {
    const computerSelection = getComputerChoice()
    const playerSelection = 'scissors'
    playRound(playerSelection, computerSelection)
    updateScores(playerScore, compScore)
    checkForWinner(playerScore, compScore)
})

// const playerSelection = "rock"

// Write a NEW function called game(). 
// Call the playRound function inside of this one to play a 5 round game that keeps score and reports a winner or loser at the end.

// function game () {
    // for (let i = 0; i < 5; i++) {
    //     const playerSelection = prompt('Choose what to throw', 'rock, paper or scissors?').toLowerCase()
    //     const computerSelection = getComputerChoice()
    //     playRound(playerSelection, computerSelection)
    //  }

//     if (playerScore > compScore) {
//         return 'You beat the computer!'
//     } else if (playerScore < compScore) {
//         return 'You lost to the computer!'
//     } else {
//         return 'You tied with the computer! Challenge again!'
//     }
// }

// console.log(game())



