import { renderQuestion } from "./renderQuestion"; // Import the renderQuestion function
import { Quizzes } from "./app"; // Import the Quizzes type from app module
import { header } from "./header";
// This function renders the list of quizzes and handles the quiz interaction logic.
export const renderQuizList = (element: HTMLElement, dataQuizzes: Array<Quizzes>, currentQuestionIndex: number): void => {
    
    // Loop through each quiz in the dataQuizzes array
    dataQuizzes.map((quiz) => {
        
        // Create elements for each quiz: a div container, button, span for title, and image for the icon
        
        const button = document.createElement("button");
        const imgSpan = document.createElement("span");
        const span = document.createElement("span");
        const img = document.createElement("img");

        // Set the quiz icon and title to the image and span
        img.src = `${quiz.icon}`; // Set the source of the image to the quiz icon
        img.alt = `${quiz.title}`; // Set the alt text for accessibility
        imgSpan.id = `${quiz.title}`
        imgSpan.appendChild(img);

        span.textContent = `${quiz.title}`; // Display the quiz title in the span

        // Set the button id to the quiz title and append the image and title (span) to the button
        button.id = `${quiz.title}`;
        button.appendChild(imgSpan);
        button.appendChild(span);

        // Append the button to the div element, and then append the div to the main element
        
        element.appendChild(button);

        // Add an event listener to the quiz button to handle when the user selects a quiz
        button.addEventListener("click", () => {
            const selectedQuiz = quiz.questions; // Get the questions of the selected quiz
            console.log(selectedQuiz); // Log the selected quiz questions (for debugging)
            
            header(document.querySelector<HTMLElement>("#header")!,quiz);
            // Select the HTML elements where the questions and quiz title will be displayed
            const divQuestions = document.querySelector<HTMLDivElement>("#questions")!;
            const divQuizTitle = document.querySelector<HTMLDivElement>("#quizTitle")!;

            // Toggle the visibility of the questions and title (show them when a quiz is selected)
            divQuestions.classList.toggle("hidden");
            divQuizTitle.classList.toggle("quizTitle");
            divQuizTitle.classList.toggle("hidden");

            let score = 0; // Initialize the quiz score

            // Render the first question of the selected quiz
            renderQuestion(document.querySelector<HTMLElement>("#questions")!, currentQuestionIndex, selectedQuiz)!;

            // Select the answer button to listen for when the user submits an answer
            const answerBtn = document.querySelector<HTMLButtonElement>("#answerBtn")!;
            answerBtn.addEventListener("click", () => {
                // Check which radio button is selected
                const selectedRadio = document.querySelector<HTMLInputElement>("input[name='options']:checked")!;
                console.log(selectedRadio);
                
                // If a radio button is selected and the answer is correct
                if (selectedRadio && selectedRadio.value === selectedQuiz[currentQuestionIndex].answer) {
                    console.log("Right answer"); // Log that the answer is correct
                    score++; // Increment the score
                    selectedRadio.checked = false; // Uncheck the radio after answering
                } 
                // If no radio button is selected, prompt the user to choose an answer
                else if (selectedRadio === null) {
                    console.log("Please choose an answer");
                    return;
                } 
                // If the selected answer is wrong
                else {
                    console.log("Wrong answer");
                    selectedRadio.checked = false; // Uncheck the radio after answering
                }

                // If there are more questions left, move to the next question
                if (currentQuestionIndex < selectedQuiz.length - 1) {
                    currentQuestionIndex++; // Move to the next question
                    renderQuestion(document.querySelector<HTMLElement>("#questions")!, currentQuestionIndex, selectedQuiz)!;
                } 
                // If all questions are answered, finish the quiz
                else {
                    console.log("Finished all questions");
                    console.log(score); // Log the final score
                }
            });
        }); // End of button click listener
    }); // End of map function
};