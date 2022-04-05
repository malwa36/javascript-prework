let argButtonName, buttonPaper, buttonRock, buttonTest, scissors;

buttonTest = document.getElementById('button-test');
buttonRock = document.getElementById('button-rock');
buttonPaper = document.getElementById('button-paper');
scissors = document.getElementById('button-scissors');
/**
 * Describe this function...
 */
const buttonClicked = function(argButtonName, argPlayerMove) {
  clearMessages();
  console.log(argButtonName + ' został kliknięty');
  let playerMove = argButtonName;
  console.log('ruch gracza to:'+ playerMove);
  const randomNumber = Math.floor(Math.random() * 3 + 1);
  console.log('wylosowana liczba to: ' + randomNumber);
  let computerMove = getMoveName(randomNumber);
  console.log('ruch komputera to: ' + computerMove);
  displayResult(playerMove, computerMove);
}
buttonRock.addEventListener('click', function(){ buttonClicked('kamień'); });

buttonPaper.addEventListener('click', function(){ buttonClicked('papier'); });

scissors.addEventListener('click', function(){ buttonClicked('nożyce'); });

let argComputerMove, argMoveId, argPlayerMove, computerMove, playerInput, playerMove, randomNumber;

/**
 * Describe this function...
 */
const getMoveName = function(argMoveId) {
  console.log('wywołano funkcję getMoveName z argumentem: ' + argMoveId);
  if (argMoveId == 1) {
    return 'kamień';
  } else if (argMoveId == 2) {
    return 'papier';
  } else if (argMoveId == 3) {
    return 'nożyce';
  } else {
    return 'błędna odpowiedź';
  }
}

/**
 * Describe this function...
 */
const displayResult = function(argPlayerMove, argComputerMove) {
  console.log('wywołano funkcję displayResults z argumentami: ' + argPlayerMove + ', ' + argComputerMove);
  if (argPlayerMove == 'papier' && argComputerMove == 'kamień') {
    printMessage('Wygrywasz!');
  } else if (argPlayerMove == 'kamień' && argComputerMove == 'nożyce') {
    printMessage('Wygrywasz!');
  } else if (argPlayerMove == 'nożyce' && argComputerMove == 'papier') {
    printMessage('Wygrywasz!');
  } else if (argPlayerMove == argComputerMove) {
    printMessage('Remis');
  } else {
    printMessage('Przegrywasz :(');
  }
  printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
}