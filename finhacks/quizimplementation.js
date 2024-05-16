const quizForm = document.getElementById('quiz-form');
const submitBtn = document.getElementById('submit-btn');
const resultsDiv = document.getElementById('results');
const resultText = document.getElementById('result-text');

// Define the results
const results = {
  A: 0,
  B: 0,
  C: 0,
  D: 0
};

// Add event listener for form submission
submitBtn.addEventListener('click', e => {
  e.preventDefault();
  calculateResults();
});

// Function to calculate the results
function calculateResults() {
  const answers = new FormData(quizForm);

  for (let [question, answer] of answers) {
    results[answer]++;
  }

  const maxResult = Object.keys(results).reduce((a, b) => results[a] > results[b] ? a : b);

  displayResults(maxResult);
}

// Function to display the results
function displayResults(result) {
  resultsDiv.classList.remove('hidden');
  resultText.textContent = `Your result is ${result}.`;
}