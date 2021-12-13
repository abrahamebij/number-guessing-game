//jshint esversion:6
// Made by admin Frontend Channel +2349090991401

var answer = document.getElementById('ans');
var input = document.getElementById('input');
var button = document.querySelector('#button');
var warn = document.getElementById('warn');
var success = document.getElementById('success');
var messages = document.querySelectorAll('span');
var hidden = document.querySelector('.hidden');




button.addEventListener("click", game);

function game() {
  disappear();
  if (input.value > guessNum && input.value < 101) {
    answer.innerHTML = "The number is less than " + input.value;
  } else if (input.value < guessNum && input.value > 1) {
    answer.innerHTML = "The number is greater than " + input.value;
  } else if (input.value == guessNum) {
    success.innerHTML = "Good job ";
    replay();
  }else if (input.value == "") {
    answer.innerHTML = "Please input a value";
  } else {
    answer.innerHTML = "";
  }

  // Setting the Warnings if the users selects a number above 100 or below 1
  if (input.value > 100) {
    warn.innerHTML = "Your answer is above 100";
  } else if (input.value < 1 && input.value !== "") {
    warn.innerHTML = "Your answer is below 1";
  }

  input.value = ''; // This feature makes it possible to clear the input whenever the button is clicked
}

function disappear() {
  for (var i = 0; i < messages.length; i++) {
    if (input.value !== "") {
      messages[i].innerHTML = "";
    } else {
      //Do nothing
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
}

function replay() {
  hidden.style.display = 'block';
}
