'use strict';

console.log('sup');

let userName = prompt('What is your name');

alert(`Welcome to my site ${userName}! Please answer the following questions with y/n answers!`);

// document.write(userName);

let question1Guess = prompt('I am 19 years old.').toLowerCase();

if (question1Guess === 'yes' || question1Guess === 'y'){
  alert('thats correct!');
} else if(question1Guess === 'no' || question1Guess === 'n'){
  alert('sorry, thats incorrect.');
}

let question2Guess = prompt('I enjoy salty foods over sweets.').toLowerCase();

if (question2Guess === 'yes' || question2Guess === 'y'){
  alert('Sorry, thats incorrect.');
} else if (question2Guess === 'no' || question2Guess === 'n'){
  alert ('thats correct!');
}

let question3Guess = prompt('I was born in washington.').toLowerCase();

if (question3Guess === 'yes' || question3Guess === 'y'){
  alert('Sorry, thats incorrect.');
} else if (question3Guess === 'no' || question3Guess === 'n'){
  alert ('thats correct!');
}

let question4Guess = prompt('Spider-man is my favorite super hero.').toLowerCase();

if (question4Guess === 'yes' || question4Guess === 'y'){
  alert('thats correct!');
} else if(question4Guess === 'no' || question4Guess === 'n'){
  alert('sorry, thats incorrect.');
}

let question5Guess = prompt('I have a twin brother.').toLowerCase();

if (question5Guess === 'yes' || question5Guess === "y"){
  alert('thats correct!');
} else if(question5Guess === 'no' || question5Guess === 'n'){
  alert('sorry, thats incorrect.');
}

alert(`Thank you ${userName} for taking this quiz!`);
