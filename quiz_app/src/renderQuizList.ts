import { renderQuestion } from "./renderQuestion"; // Import the renderQuestion function
import { Quizzes } from "./app"; // Import the Quizzes type from the app module
import { header } from "./header"; // Import the header function
import isAnswerCorrect from "./isAnswerCorrect";
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

            // Render the quiz header (title and other info)
            header(document.querySelector<HTMLElement>("#header")!, quiz);

            // Select the HTML elements where the questions and quiz title will be displayed
            const divQuestions = document.querySelector<HTMLDivElement>("#questions")!;
            const divQuizTitle = document.querySelector<HTMLDivElement>("#quizTitle")!;

            // Toggle the visibility of the questions and title
            divQuestions.classList.toggle("hidden");
            divQuestions.classList.toggle("lg:hidden")
            divQuizTitle.classList.toggle("lg:grid")
            divQuizTitle.classList.toggle("hidden");

            let score = 0; // Initialize the score to 0

            // Render the first question of the selected quiz
            renderQuestion(currentQuestionIndex, selectedQuiz)!;

            // Select the answer button to handle when the user submits an answer
            const answerBtn = document.querySelector<HTMLButtonElement>("#answerBtn")!;
            const nextQuestion = document.querySelector<HTMLButtonElement>("#nextQuestion")!;
            answerBtn.addEventListener("click", () => {
                // Check which radio button (answer option) is selected
                const selectedRadio = document.querySelector<HTMLInputElement>("input[name='options']:checked")!;
                const selectAllRadio = document.querySelectorAll<HTMLInputElement>("input[name='options']")
                const valueAllRadio = [...selectAllRadio].map(node => node);

                
                const errorAnswer = document.querySelector<HTMLHeadingElement>(".errorAnswer")!
                
                if (selectedRadio === null) {
                    errorAnswer.classList.remove("hidden")
                    return;
                } 
                const selectedLabel = document.querySelector<HTMLLabelElement>(`label[for=${selectedRadio.id}]`)!
                const lastSpanLabel = selectedLabel?.lastElementChild;
                const svgChildrenLabel = lastSpanLabel!.children
                
                

                errorAnswer.classList.add("hidden")
                svgChildrenLabel[0]!.classList.add("hidden")
                
                // If the selected answer is correct
                if (selectedRadio && selectedRadio.value === selectedQuiz[currentQuestionIndex].answer) {
                    selectedLabel?.classList.add("border-cCorrect")
                    selectedLabel?.firstElementChild?.classList.add("bg-cCorrect","text-white")
                    
                    svgChildrenLabel[0]!.classList.remove("hidden")
                    score++; // Increment the score
                    selectedRadio.checked = false; // Uncheck the radio button after submission     
                } 
                // If the selected answer is incorrect
                else {
                    selectedLabel?.classList.add("border-cError")
                    selectedLabel?.firstElementChild?.classList.add("bg-cError","text-white")
                    
                    svgChildrenLabel[1]!.classList.remove("hidden")
                    selectedRadio.checked = false; // Uncheck the radio button after submission
                    
                    isAnswerCorrect(valueAllRadio,selectedQuiz,currentQuestionIndex,"remove")
                }
                
                
                answerBtn.classList.add("hidden")
                nextQuestion.classList.remove("hidden")


                
            });

            nextQuestion.addEventListener("click",()=>{
                answerBtn.classList.remove("hidden")
                nextQuestion.classList.add("hidden")

                const allLabel =document.querySelectorAll<HTMLLabelElement>("label")
                

                allLabel.forEach(label =>{
                    label?.classList.remove("border-cCorrect")
                    label?.firstElementChild?.classList.remove("bg-cCorrect","text-white")
                    
    
                    label?.classList.remove("border-cError")
                    label?.firstElementChild?.classList.remove("bg-cError","text-white")
                    const  labelLastChild = label.lastElementChild!
                    labelLastChild.firstElementChild?.classList.add("hidden")
                    labelLastChild.lastElementChild?.classList.add("hidden")
                })

                const selectAllRadio = document.querySelectorAll<HTMLInputElement>("input[name='options']")
                const valueAllRadio = [...selectAllRadio].map(node => node);


                isAnswerCorrect(valueAllRadio,selectedQuiz,currentQuestionIndex,"add")

                // If there are more questions in the quiz, move to the next question
                if (currentQuestionIndex < selectedQuiz.length - 1) {
                    currentQuestionIndex += 1; // Increment the current question index
                    
                    renderQuestion(currentQuestionIndex, selectedQuiz)!;
                    
                } 
                // If all questions are answered, finish the quiz
                else {
                    divQuestions.classList.toggle("hidden")
                    divQuestions.classList.toggle("lg:grid")
                    const divResult = document.querySelector<HTMLDivElement>("#result")!
                    divResult.classList.toggle("hidden")
                    divResult.classList.toggle("lg:grid")
                    const resultScoreDiv = document.querySelector<HTMLDivElement>("#resultScoreDiv")!
                    const resultScoreDivChildren = resultScoreDiv.children
                    resultScoreDivChildren[0].innerHTML=`<img src=${quiz.icon} id=${quiz.title} alt=${quiz.title} class="rounded-lg"> <h3>${quiz.title}</h3>`;
                    resultScoreDivChildren[1].textContent = `${score}`

                    const playAgainBtn = document.querySelector<HTMLButtonElement>("#playAgainBtn")!
                    playAgainBtn.addEventListener("click",()=>{
                        location.reload();
                    })
                }
            })
        }); // End of button click event listener
    }); // End of map function
};