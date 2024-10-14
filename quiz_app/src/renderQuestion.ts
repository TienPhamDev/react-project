import { Questions } from "./app";

/**
 * Renders the current question and its options in the provided container element.
 * 
 * @param {HTMLElement} divQuestions - The container element where the question and options will be rendered.
 * @param {number} currentQuestionIndex - The index of the current question being rendered from the selected quiz.
 * @param {Array<Questions>} selectedQuiz - The list of questions that belong to the selected quiz.
 */
export const renderQuestion = (divQuestions: HTMLElement, currentQuestionIndex: number, selectedQuiz: Array<Questions>): void => {
    
    const questionHeader = document.querySelector<HTMLDivElement>(".questionHeader")!
    questionHeader.firstElementChild!.textContent =`Question ${currentQuestionIndex + 1 } of 10`;
    questionHeader.children[1]!.textContent = `${selectedQuiz[currentQuestionIndex].question}`
    // Loop through the options of the current question and set the text, id, and value for each corresponding label and radio input
    selectedQuiz[currentQuestionIndex].options.map((option: string, optionIndex: number) => {
        // Select all label elements and update their text and for attributes based on the optionIndex
        const label = document.querySelectorAll<HTMLLabelElement>("label")[optionIndex]!;
        const radioInput = document.querySelectorAll<HTMLInputElement>("input")[optionIndex]!;
        const letterSpan = document.querySelectorAll<HTMLSpanElement>(".letterSpan")[optionIndex];
        const optionTextSpan = document.querySelectorAll<HTMLSpanElement>(".optionTextSpan")[optionIndex];
        // Set label text and corresponding input id and value
        switch (optionIndex) {
            case 0:
              // Code to execute if expression === value1
                letterSpan.textContent = 'A';
                break;
            case 1:
              // Code to execute if expression === value2
                letterSpan.textContent = 'B';
                break;
            case 2:
            // Code to execute if expression === value2
                letterSpan.textContent = 'C';  
                break;
            case 3:
              // Code to execute if expression === value2
                letterSpan.textContent = 'D';
                break;
          }
        optionTextSpan.textContent = `${option}`;
        label.htmlFor = `option-${optionIndex}`;
        radioInput.id = `option-${optionIndex}`;
        radioInput.value = `${option}`;
        
    });
    
}