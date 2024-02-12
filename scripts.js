// Define the total number of sections in the quiz
var totalSections = 5;
var currentSection = 1; // Initialize the current section

// Define your questions and answers
const myQuestions = [
    {
        question: "Question  1: What is my favorite color?",
        answers: {
          A: "Red",
          B: "Blue",
          C: "Green",
          D: "Yellow"
        },
        correctAnswer: "A"
      },
      {
        question: "Question  2: What is my favorite movie?",
        answers: {
          A: "Titanic",
          B: "Star Wars",
          C: "Harry Potter",
          D: "Lord of the Rings"
        },
        correctAnswer: "C"
      },
      {
        question: "Question  3: What is my favorite sport?",
        answers: {
          A: "Basketball",
          B: "TableTennis",
          C: "Football",
          D: "Badminton"
        },
        correctAnswer: "B"
      },
      {
        question: "Question  4: What's my favorite drink??",
        answers: {
          A: "Whiskey",
          B: "Water",
          C: "Dr.Pepper",
          D: "Soda"
        },
        correctAnswer: "B"
      },
      {
        question: "Question  5: If I had super powers, what would be mine??",
        answers: {
          A: "Superstrength",
          B: "Teleportation",
          C: "Telekinesis",
          D: "Superspeed"
        },
        correctAnswer: "C"
      }
];

// Function to build the quiz based on the questions array
function buildQuiz() {
  // ... (your existing buildQuiz function)
}

// Function to show the results after the quiz is submitted
function showResults() {
    let numCorrect = 0;
    myQuestions.forEach((question, index) => {
      const answerElements = document.getElementsByName(`q${index + 1}`);
      const selectedAnswer = Array.from(answerElements).find(r => r.checked).value;
      if (selectedAnswer === question.correctAnswer) {
        numCorrect++;
      }
    });
  
    const scorePercent = Math.round((numCorrect / myQuestions.length) * 100);
  
    // Assuming you have a container with the ID 'results' to display the score
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = `You scored ${scorePercent}%. `;
  
    // Personalized message based on the score
    if (scorePercent > 80) {
      resultsContainer.innerHTML += "Congratulations! You deserve a Valentine's gift from me❤️❤️❤️LOVE OF MY DAY";
      // Trigger heart animation
      generateHeart(50, 50, 200, 2, 1.5);
    } else {
      resultsContainer.innerHTML += "You broke my heart. Sorry, you're not my valentine. Get me a gift!";
    }
  }

// Function to update the active section
function updateSection() {
  var sections = document.getElementsByClassName("quiz-section");
  for (var i = 0; i < sections.length; i++) {
    sections[i].classList.remove("active");
  }
  document.getElementById("section" + currentSection).classList.add("active");
}

// Function to go to the next section
function goToNextSection() {
  currentSection++;
  updateSection();
  if (currentSection === totalSections) {
    document.getElementById("next" + currentSection).disabled = true;
    document.getElementById("submitQuiz").disabled = false;
  } else {
    document.getElementById("prev" + (currentSection - 1)).disabled = false;
  }
}

// Function to go to the previous section
function goToPreviousSection() {
  currentSection--;
  updateSection();
  if (currentSection === 1) {
    document.getElementById("prev" + currentSection).disabled = true;
  } else {
    document.getElementById("next" + currentSection).disabled = false;
  }
}

// Event listener for the Submit button
document.getElementById("submit").addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the form from submitting normally
    showResults(); // Calculate and display the score
  });
  

// Initialize the state of the buttons
document.getElementById("prev1").disabled = true;
document.getElementById("submitQuiz").disabled = true;

// Add event listeners for the Next buttons
for (let i = 1; i <= totalSections; i++) {
  document.getElementById("next" + i).addEventListener("click", goToNextSection);
}

// Add event listener for the Previous buttons
for (let i = 1; i < totalSections; i++) {
  document.getElementById("prev" + i).addEventListener("click", goToPreviousSection);
}

// Build the quiz immediately
buildQuiz();

// Heart animation logic from Source 2
var brd = document.createElement("DIV");
document.body.insertBefore(brd, document.getElementById("board"));
const duration = 3000;
const speed = 0.5;
const cursorXOffset = 0;
const cursorYOffset = -5;
var hearts = [];

function generateHeart(x, y, xBound, xStart, scale) {
    const heartCount = 5; // Change the number of hearts as needed
    const colors = ["red", "pink", "purple"]; // Add more colors if needed
  
    for (let i = 0; i < heartCount; i++) {
      const heart = document.createElement("DIV");
      heart.className = "heart";
      document.body.appendChild(heart);
  
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      heart.style.backgroundColor = randomColor;
      heart.style.left = x + "px";
      heart.style.top = y + "px";
      heart.style.animation = `heartfade 6s linear`;
      heart.style.transform = `scale(${scale}, ${scale})`;
    }
  }