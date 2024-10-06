import { Questions } from "./app";

/**
 * Renders the current question and its options in the provided container element.
 * 
 * @param {HTMLElement} divQuestions - The container element where the question and options will be rendered.
 * @param {number} currentQuestionIndex - The index of the current question being rendered from the selected quiz.
 * @param {Array<Questions>} selectedQuiz - The list of questions that belong to the selected quiz.
 */
export const renderQuestion = (divQuestions: HTMLElement, currentQuestionIndex: number, selectedQuiz: Array<Questions>): void => {
    
    // Set the text content of the first child element in 'divQuestions' to the current question text
    divQuestions.firstElementChild!.textContent = `${selectedQuiz[currentQuestionIndex].question}`;         
            
    // Loop through the options of the current question and set the text, id, and value for each corresponding label and radio input
    selectedQuiz[currentQuestionIndex].options.map((option: string, optionIndex: number) => {
        // Select all label elements and update their text and for attributes based on the optionIndex
        const label = document.querySelectorAll<HTMLLabelElement>("label")[optionIndex]!;
        const radioInput = document.querySelectorAll<HTMLInputElement>("input")[optionIndex]!;

        // Set label text and corresponding input id and value
        label.textContent = `${option}`;
        label.htmlFor = `option-${optionIndex}`;
        radioInput.id = `option-${optionIndex}`;
        radioInput.value = `${option}`;
    });
}