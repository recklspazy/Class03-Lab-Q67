'use strict';
var userName = prompt('Hello. What is your name?');
var score = 0; //for the score tally
alert('Please respond to the following questions with Y/ y/ YES/ Yes/ yes OR N/ n/ NO/ No,');

// question one
var responseOne = prompt('Was I born in WA state?').toUpperCase();
console.log(responseOne);
if (responseOne === 'Y' || responseOne === 'YES') {
  alert('Sorry, That is incorrect.');
} else {
  alert('You are correct. I was not born in WA state.');
  score++;
}

//question two
var responseTwo = prompt('Do I like to drive?').toUpperCase();
console.log(responseTwo);
if (responseTwo === 'Y'|| responseTwo === 'YES') {
  alert('Yes I like to drive.');
  score++;
}
else {
  alert ('No, I actually like to drive.');
}

//question three
var responseThree = prompt ('Am I Right Handed?') .toUpperCase();
console.log(responseThree);
if (responseThree === 'N'|| responseThree === 'NO'){
  alert('Actually I am right handed.');
}
else if (responseThree === 'YES' || responseThree === 'Y') {
  alert ('YES, I am right handed.');
  score++;
}

//question four
var responseFour = prompt ('Am i Short?').toUpperCase();
console.log(responseFour);
if  (responseFour === 'Y' || responseFour === 'YES'){
  alert ('Yeah Im short.');
  score++;
}
else {
  alert ('I wish i was tall.');
}

//question five
var responseFive = prompt ('Am i tired?').toUpperCase();
console.log(responseFive);
if (responseFive === 'Y' || responseFive === 'YES'){
  alert ('Yeah i used to work night shift. So i am adjusting to the day time routine.');
  score;
}
else if (responseFive === 'N' || responseFive === 'NO'){
  alert ('Actually i am very tired from switching shift around.');
}

//question six
var favNum = 23;
console.log('favNum', favNum);
var numberGuess = parseInt(prompt ('Between 1 to 50. What number am i guessing?'));
var counter = 0;
while (numberGuess !== favNum && counter < 3) {
  if (numberGuess < favNum) {
    numberGuess = parseInt(prompt('too low guess again.'));
    counter ++;
  } else {
    numberGuess = parseInt(prompt('too high. guess again.'));
    counter ++;

  }
}

//question number seven
var states = ['california','kentucky','maryland'];
var guessState = prompt ('Guess what state i have visited?');
var numGuess = 0;
var answer = false;

while (numGuess < 5 && answer === false) {
  for(var place = 0; place < states.length; place++){
    if(guessState === states[place]) {
      answer = true;
      alert('Correct i have been to cali, kentucky, maryland.');
      score++;
    }
  }if(answer === false) {
    guessState = prompt ('Wrong, try again.');
    numGuess ++;
  } if (numGuess === 5){
  // } if (answer === false && numGuess >= 5){
    alert('Sorry too many tries');
    break;
  }
}

// correct answer counter
if (score ===0){
  alert('You dont know me at all '+userName+' you got 0.');
}
if (score ===1){
  alert('Hey ' +userName+ ' you got 1 right.');
}
if (score ===2){
  alert('Hey ' +userName+ ' you got 2 right.');
}
if (score ===3){
  alert('Hey ' +userName+ ' you got 3 right. you know little about me.');
}
if (score ===4){
  alert('Hey ' +userName+ ' you got 4 right.');
}
if (score ===5){
  alert('Hey ' +userName+ ' you got 5 right.');
}
if (score ===6){
  alert('Hey ' +userName+ ' you got 6 right.');
}
if (score ===7){
  alert('Hey ' +userName+ ' you got 7 right. you know me well.');
}

console.log('score', score);
console.log('states', states);
console.log('guessStates', guessState);
console.log('numGuess', numGuess);
console.log('answer', answer);