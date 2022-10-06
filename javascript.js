// Play against the computer, so begin with a function called getComputerChoice that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’

const choices = ['rock', 'paper', 'scissors'];

function getComputerChoice () {
    return choices[Math.floor(Math.random() * choices.length)];
}
