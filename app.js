let score = 0;
let isGameRunning = false;

document.getElementById('clickArea').addEventListener('click', function() {
  if (isGameRunning) {
    score++;
    document.getElementById('score').textContent = 'Score: ' + score;
  }
});

function startGame() {
  score = 0;
  document.getElementById('score').textContent = 'Score: 0';
  isGameRunning = true;
  setTimeout(function() {
    isGameRunning = false;
    alert('Game over! Your score is ' + score);
  }, 10000); // 10 seconds
}