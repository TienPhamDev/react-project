import { renderQuestion } from "./renderQuestion"; // Import the renderQuestion function
import { Quizzes } from "./app"; // Import the Quizzes type from the app module
import { header } from "./header"; // Import the header function

/**
 * Renders the list of quizzes and handles the quiz interaction logic.
 * 
 * @param {HTMLElement} element - The container where the quiz list will be rendered.
 * @param {Array<Quizzes>} dataQuizzes - The array of quiz data to be displayed.
 * @param {number} currentQuestionIndex - The index of the current question in the selected quiz.
 */
export const renderQuizList = (element: HTMLElement, dataQuizzes: Array<Quizzes>, currentQuestionIndex: number): void => {
    
    // Loop through each quiz in the dataQuizzes array
    dataQuizzes.map((quiz) => {
        
        // Create elements for each quiz: a button, span for the title, and image for the icon
        const button = document.createElement("button");
        const imgSpan = document.createElement("span"); // Span for holding the quiz icon
        const span = document.createElement("span");    // Span for holding the quiz title
        const img = document.createElement("img");      // Image for the quiz icon

        // Set the quiz icon and title to the image and span
        img.src = `${quiz.icon}`; // Set the source of the image to the quiz icon
        img.alt = `${quiz.title}`; // Set the alt text for accessibility
        imgSpan.id = `${quiz.title}`; // Set the id of the span holding the image
        imgSpan.appendChild(img); // Append the image to the span

        span.textContent = `${quiz.title}`; // Display the quiz title in the span

        // Set the button id to the quiz title and append the image and title (span) to the button
        button.id = `${quiz.title}`;
        button.appendChild(imgSpan);
        button.appendChild(span);

        // Append the button to the main element (quiz list container)
        element.appendChild(button);

        // Add an event listener to the button for when the user selects a quiz
        button.addEventListener("click", () => {
            const selectedQuiz = quiz.questions; // Get the questions from the selected quiz
            console.log(selectedQuiz); // Log the selected quiz questions for debugging

            // Render the quiz header (title and other info)
            header(document.querySelector<HTMLElement>("#header")!, quiz);

            // Select the HTML elements where the questions and quiz title will be displayed
            const divQuestions = document.querySelector<HTMLDivElement>("#questions")!;
            const divQuizTitle = document.querySelector<HTMLDivElement>("#quizTitle")!;

            // Toggle the visibility of the questions and title
            divQuestions.classList.toggle("hidden");
            divQuizTitle.classList.toggle("quizTitle");
            divQuizTitle.classList.toggle("hidden");

            let score = 0; // Initialize the score to 0

            // Render the first question of the selected quiz
            renderQuestion(document.querySelector<HTMLElement>("#questions")!, currentQuestionIndex, selectedQuiz)!;

            // Select the answer button to handle when the user submits an answer
            const answerBtn = document.querySelector<HTMLButtonElement>("#answerBtn")!;
            answerBtn.addEventListener("click", () => {
                // Check which radio button (answer option) is selected
                const selectedRadio = document.querySelector<HTMLInputElement>("input[name='options']:checked")!;
                console.log(selectedRadio); // Log the selected radio button for debugging
                const selectedLabel = document.querySelector<HTMLLabelElement>(`label[for=${selectedRadio.id}]`)
                console.log(selectedLabel);
                const lastSpanLabel = selectedLabel?.lastElementChild;
                const svgChildrenLabel = lastSpanLabel!.children
                console.log(lastSpanLabel);
                console.log(svgChildrenLabel);
                
                
                const errorAnswer = document.querySelector<HTMLHeadingElement>(".errorAnswer")!
                errorAnswer.classList.add("hidden")
                // selectedLabel?.classList.remove("border-cCorrect")
                // selectedLabel?.firstElementChild?.classList.remove("bg-cCorrect","text-white")
                svgChildrenLabel[0]!.classList.add("hidden")
                // If the selected answer is correct
                if (selectedRadio && selectedRadio.value === selectedQuiz[currentQuestionIndex].answer) {
                    console.log("Right answer"); // Log that the user chose the correct answer
                    selectedLabel?.classList.add("border-cCorrect")
                    selectedLabel?.firstElementChild?.classList.add("bg-cCorrect","text-white")
                    
                    svgChildrenLabel[0]!.classList.remove("hidden")
                    score++; // Increment the score
                    selectedRadio.checked = false; // Uncheck the radio button after submission     
                } 
                // If no answer is selected, prompt the user to choose one
                else if (selectedRadio === null) {
                    errorAnswer.classList.remove("hidden")
                    return;
                } 
                // If the selected answer is incorrect
                else {
                    console.log("Wrong answer"); // Log that the answer is wrong
                    svgChildrenLabel[1]!.classList.remove("hidden")
                    selectedRadio.checked = false; // Uncheck the radio button after submission
                }

                // // If there are more questions in the quiz, move to the next question
                // if (currentQuestionIndex < selectedQuiz.length - 1) {
                //     currentQuestionIndex++; // Increment the current question index
                //     renderQuestion(document.querySelector<HTMLElement>("#questions")!, currentQuestionIndex, selectedQuiz)!;
                // } 
                // // If all questions are answered, finish the quiz
                // else {
                //     console.log("Finished all questions"); // Log that the quiz is finished
                //     console.log(score); // Log the final score
                // }
            });
        }); // End of button click event listener
    }); // End of map function
};