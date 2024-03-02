// Generate random number between 1 and 100
const randomNumber = Math.floor(Math.random() * 50) + 1;
let attempts = 0;

function checkGuess() {
    const guess = parseInt(document.getElementById('guessField').value);
    const message = document.getElementById('message');

    if (isNaN(guess) || guess < 1 || guess > 50) {
        message.textContent = 'Please enter a valid number between 1 and 50.';
        return;
    }

    attempts++;

    if (guess === randomNumber) {
        message.textContent = `Congratulations! You guessed the correct number ${randomNumber} in ${attempts} attempts!`;
        message.style.color = 'green';
        document.getElementById('guessField').disabled = true;
    } else if (guess < randomNumber) {
        message.textContent = 'Try a higher number.';
        message.style.color = 'black';
    } else {
        message.textContent = 'a lower number.';
        message.style.color = 'black';
    }
}
