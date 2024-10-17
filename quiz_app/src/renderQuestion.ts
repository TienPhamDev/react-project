import { Questions } from "./app";

/**
 * Renders the current question and its options in the provided container element.
 * 
 * @param {HTMLElement} divQuestions - The container element where the question and options will be rendered.
 * @param {number} currentQuestionIndex - The index of the current question being rendered from the selected quiz.
 * @param {Array<Questions>} selectedQuiz - The list of questions that belong to the selected quiz.
 */
export const renderQuestion = (currentQuestionIndex: number, selectedQuiz: Array<Questions>): void => {
    
    // Select the question header element and update it with the current question number and total (10 questions).
    const questionHeader = document.querySelector<HTMLDivElement>(".questionHeader")!;
    
    // Update the question number in the first child of the questionHeader element.
    questionHeader.firstElementChild!.textContent = `Question ${currentQuestionIndex + 1} of 10`;
    
    // Set the question text in the second child of the questionHeader element.
    questionHeader.children[1]!.textContent = `${selectedQuiz[currentQuestionIndex].question}`;

    // Loop through each option of the current question and update the label, radio input, and spans for the letter and option text.
    selectedQuiz[currentQuestionIndex].options.map((option: string, optionIndex: number) => {
        
        // Select the label element for the option based on its index and assign the corresponding text and attributes.
        const label = document.querySelectorAll<HTMLLabelElement>("label")[optionIndex]!;
        
        // Select the radio input element for the option based on its index and assign the corresponding id and value.
        const radioInput = document.querySelectorAll<HTMLInputElement>("input")[optionIndex]!;
        
        // Select the span elements for the option letter (A, B, C, D) and the option text based on the option index.
        const letterSpan = document.querySelectorAll<HTMLSpanElement>(".letterSpan")[optionIndex];
        const optionTextSpan = document.querySelectorAll<HTMLSpanElement>(".optionTextSpan")[optionIndex];
        
        // Use a switch statement to assign the appropriate letter (A, B, C, D) to each option.
        switch (optionIndex) {
            case 0:
                letterSpan.textContent = 'A';
                break;
            case 1:
                letterSpan.textContent = 'B';
                break;
            case 2:
                letterSpan.textContent = 'C';
                break;
            case 3:
                letterSpan.textContent = 'D';
                break;
        }
        
        // Set the option text for the span element based on the current option.
        optionTextSpan.textContent = `${option}`;
        
        // Set the label's `for` attribute to match the radio input's id for proper accessibility.
        label.htmlFor = `option-${optionIndex}`;
        
        // Set the radio input's id and value to match the current option.
        radioInput.id = `option-${optionIndex}`;
        radioInput.value = `${option}`;
    });
};