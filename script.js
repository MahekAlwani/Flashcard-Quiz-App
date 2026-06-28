// Default Flashcards
let flashcards = [
    {
         question: "What is HTML?",
         answer: "HTML stands for HyperText Markup Language."
    }, 
    {
         question: "What is CSS?",
        answer: "CSS stands for Cascading Style Sheets."
    },
    {
        question: "What is JavaScript?",
        answer: "JavaScript is a programming language used to make web pages interactive."
    },
    {
        question: "Which HTML tag is used for the largest heading?",
        answer: "<h1>"
    },
    {
        question: "Which CSS property changes text color?",
        answer: "color"
    },
    {
        question: "What symbol is used for comments in JavaScript?",
        answer: "//"
    },
    {
         question: "Which company developed JavaScript?",
         answer: "Netscape"
    },
    {
        question: "What does API stand for?",
        answer: "Application Programming Interface"
    },
    {
        question: "What does URL stand for?",
        answer: "Uniform Resource Locator"
    },
    {
        question: "What is the extension of a JavaScript file?",
        answer: ".js"
    },
    {
        question: "What is the extension of a CSS file?",
        answer: ".css"
    },
    {
        question: "What is the extension of an HTML file?",
        answer: ".html"
    },
    {
        question: "Which keyword declares a variable in JavaScript?",
        answer: "let, const, or var"
    },
    {
        question: "What is a database?",
        answer: "A system for storing and managing data"
    },
    {
        question: "What does SQL stand for?",
        answer: "Structured Query Language"
    },
    {
        question: "What is the brain of the computer?",
        answer: "CPU"
    },
    {
        question: "What does RAM stand for?",
        answer: "Random Access Memory"
    },
    {
        question: "What is the full form of USB?",
        answer: "Universal Serial Bus"
    },
    {
        question: "What is the full form of HTTP?",
        answer: "HyperText Transfer Protocol"
    },
    {
        question: "What is the full form of HTTPS?",
        answer: "HyperText Transfer Protocol Secure"
    },
    {
        question: "Who is known as the father of computers?",
        answer: "Charles Babbage"
    },
    {
        question: "What does AI stand for?",
        answer: "Artificial Intelligence"
    },
    {
        question: "What does ML stand for?",
        answer: "Machine Learning"
    },
    {
        question: "Which language is mainly used for Data Science?",
        answer: "Python"
    },
    {
        question: "What is Git?",
        answer: "A version control system"
    },
    {
        question: "What is GitHub?",
        answer: "A platform for hosting Git repositories"
    },
    {
        question: "What does CPU stand for?",
        answer: "Central Processing Unit"
    },
    {
        question: "What does GPU stand for?",
        answer: "Graphics Processing Unit"
    },
    {
        question: "What is an operating system?",
        answer: "Software that manages computer hardware and software resources"
    },
    {
        question: "Name one popular web browser.",
        answer: "Google Chrome"
    }
];

// Current Flashcard Index
let currentIndex = 0;

//Select Elements
const questionEl = document.getElementById("question");
const answerEl = document.getElementById("answer");

const showAnswerBtn = document.getElementById("show-answer-btn");
const nextBtn = document.getElementById("next-btn");
const prevBtn = document.getElementById("prev-btn");

const addBtn = document.getElementById("add-btn");
const editBtn = document.getElementById("edit-btn");
const deleteBtn =  document.getElementById("delete-btn");

const newQuestion   = document.getElementById("new-question");
const newAnswer = document.getElementById("new-answer");

// Display Flashcard
function displayFlashcard() {
    questionEl.textContent = flashcards[currentIndex].question;
    answerEl.textContent = flashcards[currentIndex].answer;
    answerEl.classList.add("hidden");
    showAnswerBtn.textContent = "Show Answer";
}

// Initial Display
displayFlashcard();

// Show/Hide Answer
showAnswerBtn.addEventListener("click", () => {
    if(answerEl.classList.contains("hidden")) {
        answerEl.classList.remove("hidden");
        showAnswerBtn.textContent = "Hide Answer";
    }
    else{
        answerEl.classList.add("hidden");
        showAnswerBtn.textContent = "Show Answer";
    }
});

// Next Flashcard
nextBtn.addEventListener("click", () => {
     currentIndex ++;
     if(currentIndex >= flashcards.length) {
        currentIndex = 0;
     }
     displayFlashcard();   
});

// Previous Flashcard
prevBtn.addEventListener("click" , () => {
    currentIndex --;
    if(currentIndex < 0) {
        currentIndex =flashcards.length - 1;
    }
    displayFlashcard();
    });

    // Add Flashcard
addBtn.addEventListener("click", () => {
    const question = newQuestion.value.trim();
    const answer = newAnswer.value.trim();
    if(question === "" || answer === "") {
        alert("Please enter both question and answer.");
        return;
    }
    flashcards.push({ 
        question: question,
        answer: answer
    });
    newQuestion.value = "";
    newAnswer.value = "";
    alert("Flashcard added successfully!");
});

// Edit Current Flashcard
editBtn.addEventListener("click", () => {
    const updateQuestion = prompt(
        "Edit Question:", 
        flashcards[currentIndex].question);
        const updateAnswer = prompt(
        "Edit Answer:",
            flashcards[currentIndex].answer);
        
      if(updateQuestion && updateAnswer) {
        flashcards[currentIndex].question = updateQuestion;
        flashcards[currentIndex].answer = updateAnswer;
        displayFlashcard();
        alert("Flashcard updated successfully!");
      }
    });

    // Delete Current Flashcard
     deleteBtn.addEventListener("click", () => {
        if(flashcards.length === 1) {
            alert("At least one flashcard must remain.");
            return;
        }
        const confirmDelete = confirm(
            "Are you sure you want to delete this flashcard?");
        if(confirmDelete) {
            flashcards.splice(currentIndex, 1);
            if(currentIndex >= flashcards.length) {
                currentIndex = flashcards.length - 1;
        }
        displayFlashcard();
        alert("Flashcard deleted successfully!");
    }
});