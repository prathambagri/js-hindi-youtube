let randomNumber = parseInt(Math.random() * 100 + 1);

const submit =  document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const loworHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')


let preGuess = []
let numGuess = 1
let playGame = true

if(playGame){
  submit.addEventListener('click',function(e){
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    vaildateGuess(guess);
  })
}
function vaildateGuess(guess){
  // it will check the input no is in the range of 1-100 or not
  if(isNaN(guess)){
    alert('please enter the vaild number')
  } else if(guess < 1 || guess > 100 ){
    alert('please enter the between 1 - 100')
  } else{
    preGuess.push(guess)
    if(numGuess === 11){
      displayGuess(guess)
      displayMessage(`Game Over. Random number was ${randomNumber}`)
      endGame()
    } else{
      displayGuess(guess)
      checkGuess(guess)
    }
  }

}

function checkGuess(guess){
  // it will check weather the no is correct, lessthan or greaterthan the random no 
  if(guess === randomNumber){
    displayMessage(`you guess it right`)
    endGame();
  } else if(guess < randomNumber){
    displayMessage(`Number is Too low`)
  } else if(guess > randomNumber){
    displayMessage(`Number is Too high`)
  }
}

function displayGuess(guess){
  // it will clean the value and update the arrays 
  userInput.value = ''
  guessSlot.innerHTML += `${guess}, `
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`
}

function displayMessage(message){
  // it will pass the message and print the message
  loworHi.innerHTML= `<h2>${message}</h2>`
}

function endGame(){
  userInput.value = ''
  userInput.setAttribute('disabled', '')
  p.classList.add('button')
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`
  startOver.appendChild(p);
  playGame = false;
  newGame()
}

function newGame(){
  const newGameButton = document.querySelector('#newGame')
  newGameButton.addEventListener('click', function(e){
    randomNumber = parseInt(Math.random() * 100 + 1);
    preGuess = []
    numGuess = 1
    guessSlot.innerHTML = ''
    remaining.innerHTML = `${11 - numGuess}`
    userInput.removeAttribute('disabled')
    startOver.removeChild(p)

    playGame = true
  })
}

