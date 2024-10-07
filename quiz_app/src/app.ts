import './style.css';
import { header } from './header.ts';
import data from './data.json'
import { renderQuizList } from './renderQuizList.ts';

export interface Questions {
  question:string
  options: Array<string>
  answer:string
}
export interface Quizzes{
  title:string
  icon:string
  questions:Array<Questions>
}

let currentQuestionIndex = 0;
const {quizzes} = data;
console.log(quizzes);
let selectedQuiz: Quizzes = {
  title:"",
  icon:"",
  questions:[]
};

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="mainDiv container px-8">
    <header id="header" class="flex justify-between py-[1rem]">
    </header>
    <main id="main">
      <div id="quizTitle" class="quizTitle flex flex-col gap-10">
        <div class="welcome">
          <h2 class="text-[4.4rem] font-light leading-tight">Welcome to the</h2>
          <h3 class="font-bold text-[4.4rem] leading-tight">Frontend Quiz!</h3>
          <h5 class="text-tSecondary italic font-light leading-relaxed">Pick a subject to get started.</h5>
        </div>
        <div class="frontEndQuiz flex flex-col gap-4" id="frontEndQuiz">
        </div> 
      </div>
      <div id="questions" class="hidden">
        <h3>Questions Here</h3>
        <div class="options">
          <input id="option-1" name="options" type="radio" value="">
          <label for="option-1">option 1</label>
          <input id="option-2" name="options" type="radio" value="">
          <label for="option-2">option 2</label>
          <input id="option-3" name="options" type="radio" value="">
          <label for="option-3">option 3</label>
          <input id="option-4" name="options" type="radio" value="">
          <label for="option-4">option 4</label>
        </div>
        <button id="answerBtn" class="answerBtn" type="button">Answer</button>
      </div>
    </main>
  </div>
`
header(document.querySelector<HTMLElement>("#header")!);
renderQuizList(document.querySelector<HTMLDivElement>("#frontEndQuiz")!,quizzes,currentQuestionIndex);
