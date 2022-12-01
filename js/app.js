'use strict';


let userName = prompt('What is your name');

alert(`Welcome to my site ${userName}! Please answer the following questions with y/n answers!`);

let score = 0;

questionsGame();
numberGame();
foodGame();


function questionsGame() {
  let question1Guess = prompt('I am 19 years old.').toLowerCase();

  if (question1Guess === 'yes' || question1Guess === 'y') {
    alert('thats correct!');
    score++;
  } else if (question1Guess === 'no' || question1Guess === 'n') {
    alert('sorry, thats incorrect.');
  }

  let question2Guess = prompt('I enjoy salty foods over sweets.').toLowerCase();

  if (question2Guess === 'yes' || question2Guess === 'y') {
    alert('Sorry, thats incorrect.');
  } else if (question2Guess === 'no' || question2Guess === 'n') {
    alert('thats correct!');
    score++;
  }

  let question3Guess = prompt('I was born in washington.').toLowerCase();

  if (question3Guess === 'yes' || question3Guess === 'y') {
    alert('Sorry, thats incorrect.');
  } else if (question3Guess === 'no' || question3Guess === 'n') {
    alert('thats correct!');
    score++;
  }

  let question4Guess = prompt('Spider-man is my favorite super hero.').toLowerCase();

  if (question4Guess === 'yes' || question4Guess === 'y') {
    alert('thats correct!');
    score++;
  } else if (question4Guess === 'no' || question4Guess === 'n') {
    alert('sorry, thats incorrect.');
  }

  let question5Guess = prompt('I have a twin brother.').toLowerCase();

  if (question5Guess === 'yes' || question5Guess === "y") {
    alert('thats correct!');
    score++;
  } else if (question5Guess === 'no' || question5Guess === 'n') {
    alert('sorry, thats incorrect.');
  }
}

function numberGame() {
  // collaberated with Liam and Steve
  let numberAnswer = 20;
  let attempts = 4;

  while (attempts > 0) {
    let numberPrompt = prompt('Can you guess the number im thinking of?');
    if (parseInt(numberPrompt) === numberAnswer) {
      alert('Nice! You got it correct!');
      score++;
      break;

    } else if (numberPrompt > numberAnswer) {
      alert('that answer is too big!');
    } else if (numberPrompt < numberAnswer) {
      alert('thats answer is to low!');
    }
    attempts--;
  }
  alert('the correct answer is 20');
}

function foodGame() {
  let array = ['pizza', 'french fries', 'pasta', 'teriyaki', 'chicken', 'blt'];


  // collaberated with Liam and Steve
  for (let i = 0; i < 6; i++) {
    let guessingPrompt = prompt('Can you guess one of my favorite foods?').toLowerCase();
    let correctGuess = false;
    for (let j = 0; j < array.length; j++) {
      console.log(array[j]);
      console.log(guessingPrompt);
      if (guessingPrompt === array[j]) {
        correctGuess = true;
        score++;
        break;
      }

      guessingPrompt--;
    }
    if (correctGuess === false) {
      alert('sorry, thats not one of my favorites.');
    } else if (correctGuess === true) {
      alert('nice! you guessed one of my favorites!');
      break;
    }
  }
}

alert(`Thank you ${userName} for taking this quiz! You got ${score} out of 7 questions correct! Time for a guessing game..`);
