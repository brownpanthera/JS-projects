const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissor' || userInput ==='bomb') {

        return userInput;

    } else {
        return'You should pick between the rock, paper, scissor';
    }
};

const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3);

    switch (randomNumber) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissor';
    }
}

const determineWinner = (userChoice, computerChoice) => {

    if(userChoice === 'bomb'){
      return 'User won!'
    }

    if (userChoice === computerChoice) {
        return 'The game is tie!';

    }

    if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
            return 'Computer won!';

        } else {
            return 'User won!';
        }

    }

    if (userChoice === 'paper') {
        if (computerChoice === 'scissor') {
            return 'Computer won!';

        } else {
            return 'User won!';
        }

    }

    if (userChoice === 'scissor') {
        if (computerChoice === 'rock') {
            return 'Computer won!';

        } else {
            return 'User won!';
        }

    }

};

const playGame = () =>{
    const userChoice = getUserChoice('rock');   // chosse
    const computerChoice = getComputerChoice();

console.log(determineWinner(userChoice, computerChoice));
}

playGame();