//jshint esversion:6
// Made by admin Frontend Channel +2349090991401

var answer = document.getElementById('ans');
var input = document.getElementById('input');
var button = document.querySelector('#button');
var warn = document.getElementById('warn');
var success = document.getElementById('success');
var messages = document.querySelectorAll('span');
var hidden = document.querySelector('.hidden');
var tries = document.getElementById('num');
var close = document.querySelector('.close');

var firstNum = 10;
var decrement = 1;
tries.innerHTML = 10;

button.addEventListener("click", game);

function game() {
  disappear();
  count();
  if (input.value > guessNum && input.value < 101) {
    answer.innerHTML = "The number is less than <strong>" + input.value + "</strong>";
  } else if (input.value < guessNum && input.value > 1) {
    answer.innerHTML = "The number is greater than <strong>" + input.value + "</strong>";
  } else if (input.value == guessNum) {
    success.innerHTML = "Good job ";
    button.style.display = "none";
    replay();
  } else if (input.value == "") {
    answer.innerHTML = "Please input a value";
  } else {
    answer.innerHTML = "";
  }

  // Setting the Warnings if the users selects a number above 100 or below 1
  if (input.value > 100) {
    warn.innerHTML = "Your input is above 100";
  } else if (input.value < 1 && input.value !== "") {
    warn.innerHTML = "Your input is below 1";
  }

  input.value = ''; // This feature makes it possible to clear the input whenever the button is clicked

  lose();
}

function disappear() {
  for (var i = 0; i < messages.length; i++) {
    if (input.value !== "") {
      messages[i].innerHTML = "";
    } else if (button.clicked) {
      ans.innerHTML = "";
      warn.innerHTML = "";
      success.innerHTML = "";
    }
  }
}
let guessNum = Math.floor((Math.random() * 100) + 1);

// What should happen when I click the Play Again button
hidden.addEventListener("click", hideHidden);

function hideHidden() {
  // Generate a new random number
  guessNum = Math.floor((Math.random() * 100) + 1);
  hidden.style.display = 'none';
  success.innerHTML = '';
  answer.innerHTML = "";
  firstNum = 10;
  button.style.display = "block";
  tries.innerHTML = 10;
}

function replay() {
  hidden.style.display = 'block';
}

function count() {
  tries.innerHTML = firstNum -= decrement;
}

close.addEventListener("click", function() {
  document.querySelector('.text').style.display = "none";
});



function lose() {
  if (tries.innerHTML == '0') {
    answer.innerHTML = 'You lose, the answer is ' + guessNum;
    tries.innerHTML = firstNum;
    button.style.display = "none";
    hidden.style.display = "block";
  }
}
