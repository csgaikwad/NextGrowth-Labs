// Array of colors for the game
const buttonColours = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickedPattern = [];

let started = false;
let level = 0;

// Add event listener for the "keypress" event
document.addEventListener("keypress", () => {
  if (!started) {
    document.getElementById("level-title").textContent = "Level " + level;
    nextSequence();
    started = true;
  }
});

// Add event listeners for each button click
document.getElementById("green").addEventListener("click", () => handleButtonClick("green"));
document.getElementById("red").addEventListener("click", () => handleButtonClick("red"));
document.getElementById("yellow").addEventListener("click", () => handleButtonClick("yellow"));
document.getElementById("blue").addEventListener("click", () => handleButtonClick("blue"));

function handleButtonClick(userChosenColour) {
  userClickedPattern.push(userChosenColour);
  playSound(userChosenColour);
  animatePress(userChosenColour);

  checkAnswer(userClickedPattern.length - 1);
}

function checkAnswer(currentLevel) {
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    if (userClickedPattern.length === gamePattern.length) {
      setTimeout(() => {
        nextSequence();
      }, 1000);
    }
  } else {
    playSound("wrong");
    document.body.classList.add("game-over");
    document.getElementById("level-title").textContent = "Game Over, Press Any Key to Restart";

    setTimeout(() => {
      document.body.classList.remove("game-over");
    }, 200);

    startOver();
  }
}

function nextSequence() {
  userClickedPattern = [];
  level++;
  document.getElementById("level-title").textContent = "Level " + level;
  const randomNumber = Math.floor(Math.random() * 4);
  const randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  document.getElementById(randomChosenColour).classList.add("pressed");
  playSound(randomChosenColour);

  setTimeout(() => {
    document.getElementById(randomChosenColour).classList.remove("pressed");
  }, 300);
}

function animatePress(currentColor) {
  const button = document.getElementById(currentColor);
  button.classList.add("pressed");
  setTimeout(() => {
    button.classList.remove("pressed");
  }, 100);
}

function playSound(name) {
  const audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function startOver() {
  level = 0;
  gamePattern = [];
  started = false;
}
