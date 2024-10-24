import './style.css'; // Import global CSS styles
import { header } from './header.ts'; // Import the header rendering function
import data from './data.json'; // Import the quiz data from a JSON file
import { renderQuizList } from './renderQuizList.ts'; // Import the function that renders the list of quizzes

// Define the structure for questions, including the question text, options, and the correct answer
export interface Questions {
  question: string;
  options: Array<string>;
  answer: string;
}

// Define the structure for quizzes, each containing a title, icon, and an array of questions
export interface Quizzes {
  title: string;
  icon: string;
  questions: Array<Questions>;
}

// Initialize the current question index to track which question is being answered
let currentQuestionIndex = 0;

// Destructure quizzes from the imported data
const { quizzes } = data;

// Select the #app container and set the inner HTML to render the layout of the quiz application
document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="mainDiv container px-8 lg:px-52 mx-auto">
    <header id="header" class="flex justify-between items-center py-[2rem]">
    </header>
    <main id="main" class="lg:mt-12">
      <div id="quizTitle" class="quizTitle lg:grid lg:grid-cols-2 flex flex-col gap-10">
        <div class="welcome">
          <h2 class="text-[4.4rem] font-light leading-tight">Welcome to the</h2>
          <h3 class="font-bold text-[4.4rem] leading-tight">Frontend Quiz!</h3>
          <h5 class="text-tSecondary italic font-light leading-relaxed">Pick a subject to get started.</h5>
        </div>
        <div class="frontEndQuiz flex flex-col gap-4" id="frontEndQuiz">
        </div> 
      </div>
      <div id="questions" class="hidden lg:hidden lg:grid lg:gap-16 lg:grid-cols-2 flex flex-col gap-8 justify-between ">
        <div class="questionHeader h-48 lg:h-96 flex-col flex justify-between">
          <div class="questionsNumber text-tSecondary italic ">Question 6 of 10</div>
          <p class="questionContent text-3xl text-tBase font-bold tracking-wide">Questions Here</p>
          <div id="slideQuestion" class="bg-bgButton h-[1rem] w-full flex p-[0.3rem] rounded-xl">
            
          </div>
        </div>
        <div>
          <div class="options flex flex-col gap-8">
            <!-- Radio inputs for quiz options -->
            <input id="option-1" name="options" type="radio" value="">
            <label for="option-1" class="optionLabel">
              <span class="letterSpan">A</span> 
              <span class="optionTextSpan">option1</span>
              <span class="flex ml-auto">
                <svg class="size-10 hidden" xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" viewBox="0 0 40 40"><path fill="#26D782" d="M20 5a15 15 0 1 1 0 30 15 15 0 0 1 0-30Zm0 2.5a12.5 12.5 0 1 0 0 25 12.5 12.5 0 0 0 0-25Zm-1.875 15.105L25.3 15.41a1.25 1.25 0 0 1 1.915 1.593l-.145.174-8.06 8.08a1.25 1.25 0 0 1-1.595.148l-.175-.145-4.375-4.375a1.25 1.25 0 0 1 1.595-1.913l.175.143 3.49 3.49Z"/></svg>
                <svg class="size-10 hidden" xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" viewBox="0 0 40 40"><path fill="#EE5454" d="M20 5a15 15 0 1 1 0 30 15 15 0 0 1 0-30Zm0 2.5a12.5 12.5 0 1 0 0 25 12.5 12.5 0 0 0 0-25Zm-5.402 7.415.142-.175a1.25 1.25 0 0 1 1.595-.143l.175.143L20 18.233l3.49-3.493a1.25 1.25 0 0 1 1.595-.143l.175.143a1.25 1.25 0 0 1 .142 1.595l-.142.175L21.767 20l3.493 3.49a1.25 1.25 0 0 1 .142 1.595l-.142.175a1.25 1.25 0 0 1-1.595.142l-.175-.142L20 21.767l-3.49 3.493a1.25 1.25 0 0 1-1.595.142l-.175-.142a1.25 1.25 0 0 1-.143-1.595l.143-.175L18.233 20l-3.493-3.49a1.25 1.25 0 0 1-.143-1.595Z"/></svg>
              </span>
            </label>
            <input id="option-2" name="options" type="radio" value="">
            <label for="option-2" class="optionLabel">
              <span class="letterSpan">B</span> 
              <span class="optionTextSpan">option2</span>
              <span class="flex ml-auto">
                <svg class="size-10 hidden" xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" viewBox="0 0 40 40"><path fill="#26D782" d="M20 5a15 15 0 1 1 0 30 15 15 0 0 1 0-30Zm0 2.5a12.5 12.5 0 1 0 0 25 12.5 12.5 0 0 0 0-25Zm-1.875 15.105L25.3 15.41a1.25 1.25 0 0 1 1.915 1.593l-.145.174-8.06 8.08a1.25 1.25 0 0 1-1.595.148l-.175-.145-4.375-4.375a1.25 1.25 0 0 1 1.595-1.913l.175.143 3.49 3.49Z"/></svg>
                <svg class="size-10 hidden" xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" viewBox="0 0 40 40"><path fill="#EE5454" d="M20 5a15 15 0 1 1 0 30 15 15 0 0 1 0-30Zm0 2.5a12.5 12.5 0 1 0 0 25 12.5 12.5 0 0 0 0-25Zm-5.402 7.415.142-.175a1.25 1.25 0 0 1 1.595-.143l.175.143L20 18.233l3.49-3.493a1.25 1.25 0 0 1 1.595-.143l.175.143a1.25 1.25 0 0 1 .142 1.595l-.142.175L21.767 20l3.493 3.49a1.25 1.25 0 0 1 .142 1.595l-.142.175a1.25 1.25 0 0 1-1.595.142l-.175-.142L20 21.767l-3.49 3.493a1.25 1.25 0 0 1-1.595.142l-.175-.142a1.25 1.25 0 0 1-.143-1.595l.143-.175L18.233 20l-3.493-3.49a1.25 1.25 0 0 1-.143-1.595Z"/></svg>
              </span>
            </label>
            <input id="option-3" name="options" type="radio" value="">
            <label for="option-3" class="optionLabel">
              <span class="letterSpan">C</span> 
              <span class="optionTextSpan">option3</span>
              <span class="flex ml-auto">
                <svg class="size-10 hidden" xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" viewBox="0 0 40 40"><path fill="#26D782" d="M20 5a15 15 0 1 1 0 30 15 15 0 0 1 0-30Zm0 2.5a12.5 12.5 0 1 0 0 25 12.5 12.5 0 0 0 0-25Zm-1.875 15.105L25.3 15.41a1.25 1.25 0 0 1 1.915 1.593l-.145.174-8.06 8.08a1.25 1.25 0 0 1-1.595.148l-.175-.145-4.375-4.375a1.25 1.25 0 0 1 1.595-1.913l.175.143 3.49 3.49Z"/></svg>
                <svg class="size-10 hidden" xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" viewBox="0 0 40 40"><path fill="#EE5454" d="M20 5a15 15 0 1 1 0 30 15 15 0 0 1 0-30Zm0 2.5a12.5 12.5 0 1 0 0 25 12.5 12.5 0 0 0 0-25Zm-5.402 7.415.142-.175a1.25 1.25 0 0 1 1.595-.143l.175.143L20 18.233l3.49-3.493a1.25 1.25 0 0 1 1.595-.143l.175.143a1.25 1.25 0 0 1 .142 1.595l-.142.175L21.767 20l3.493 3.49a1.25 1.25 0 0 1 .142 1.595l-.142.175a1.25 1.25 0 0 1-1.595.142l-.175-.142L20 21.767l-3.49 3.493a1.25 1.25 0 0 1-1.595.142l-.175-.142a1.25 1.25 0 0 1-.143-1.595l.143-.175L18.233 20l-3.493-3.49a1.25 1.25 0 0 1-.143-1.595Z"/></svg>
              </span>
            </label>
            <input id="option-4" name="options" type="radio" value="">
            <label for="option-4" class="optionLabel">
              <span class="letterSpan">D</span> 
              <span class="optionTextSpan">option4</span>
              <span class="flex ml-auto">
                <svg class="size-10 hidden" xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" viewBox="0 0 40 40"><path fill="#26D782" d="M20 5a15 15 0 1 1 0 30 15 15 0 0 1 0-30Zm0 2.5a12.5 12.5 0 1 0 0 25 12.5 12.5 0 0 0 0-25Zm-1.875 15.105L25.3 15.41a1.25 1.25 0 0 1 1.915 1.593l-.145.174-8.06 8.08a1.25 1.25 0 0 1-1.595.148l-.175-.145-4.375-4.375a1.25 1.25 0 0 1 1.595-1.913l.175.143 3.49 3.49Z"/></svg>
                <svg class="size-10 hidden" xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" viewBox="0 0 40 40"><path fill="#EE5454" d="M20 5a15 15 0 1 1 0 30 15 15 0 0 1 0-30Zm0 2.5a12.5 12.5 0 1 0 0 25 12.5 12.5 0 0 0 0-25Zm-5.402 7.415.142-.175a1.25 1.25 0 0 1 1.595-.143l.175.143L20 18.233l3.49-3.493a1.25 1.25 0 0 1 1.595-.143l.175.143a1.25 1.25 0 0 1 .142 1.595l-.142.175L21.767 20l3.493 3.49a1.25 1.25 0 0 1 .142 1.595l-.142.175a1.25 1.25 0 0 1-1.595.142l-.175-.142L20 21.767l-3.49 3.493a1.25 1.25 0 0 1-1.595.142l-.175-.142a1.25 1.25 0 0 1-.143-1.595l.143-.175L18.233 20l-3.493-3.49a1.25 1.25 0 0 1-.143-1.595Z"/></svg>
              </span>
            </label>
          </div>
          <!-- Button for submitting the selected answer -->
          <button id="answerBtn" class="quizMainBtn" type="button">Submit answer</button>
          <button id="nextQuestion" class="quizMainBtn hidden" typye="button">Next Question</button>
          <h5 class="errorAnswer hidden flex justify-center items-center">
            
              <svg class="size-8" xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" viewBox="0 0 40 40"><path fill="#EE5454" d="M20 5a15 15 0 1 1 0 30 15 15 0 0 1 0-30Zm0 2.5a12.5 12.5 0 1 0 0 25 12.5 12.5 0 0 0 0-25Zm-5.402 7.415.142-.175a1.25 1.25 0 0 1 1.595-.143l.175.143L20 18.233l3.49-3.493a1.25 1.25 0 0 1 1.595-.143l.175.143a1.25 1.25 0 0 1 .142 1.595l-.142.175L21.767 20l3.493 3.49a1.25 1.25 0 0 1 .142 1.595l-.142.175a1.25 1.25 0 0 1-1.595.142l-.175-.142L20 21.767l-3.49 3.493a1.25 1.25 0 0 1-1.595.142l-.175-.142a1.25 1.25 0 0 1-.143-1.595l.143-.175L18.233 20l-3.493-3.49a1.25 1.25 0 0 1-.143-1.595Z"/></svg>
            
            <span class="text-cError">Please select an answer</span>
          </h5>
        </div>
      </div>
      <div id="result" class="hidden lg:grid-cols-2">
        <div>
          <h1 class="text-[4.4rem] leading-tight">Quiz completed</h1>
          <h2 class="text-[4.4rem] leading-tight font-bold mb-[1.2rem] ">You scored...</h2>
        </div>
        <div>
          <div id="resultScoreDiv" class="flex flex-col py-[4rem] rounded-xl text-tBase bg-bgButton justify-center items-center">
            <div class="flex justify-center items-center text-[3.2rem] gap-[1rem]"></div>
            <span class="text-[5.6rem] font-bold"></span>
            <span class="text-[1.6rem] font-light text-tSecondary">out of 10</span>
          </div>
          <button id="playAgainBtn" class="quizMainBtn">Play Again</button>
        </div>
      </div>
    </main>
  </div>
`;

// Call the header function to render the header with the quiz info
header(document.querySelector<HTMLElement>("#header")!);

// Call the renderQuizList function to render the list of quizzes in the frontEndQuiz container
renderQuizList(document.querySelector<HTMLDivElement>("#frontEndQuiz")!, quizzes, currentQuestionIndex);