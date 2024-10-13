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
      <div id="questions" class="hidden flex flex-col gap-8 justify-between ">
        <div class="questionHeader h-48 flex-col flex justify-between">
          <div class="questionsNumber text-tSeccondary italic ">Question 6 of 10</div>
          <p class="questionContent text-3xl text-tBase font-bold tracking-wide">Questions Here</p>
          <div class="bg-bgButton h-[1rem] w-full flex p-[0.3rem] rounded-xl">
            <span class="bg-pPurple w-[10%] h-full rounded-xl"></span>
          </div>
        </div>
        <div>
        
        <div class="options flex flex-col gap-8">
          <input id="option-1" name="options" type="radio" value="">
          <label for="option-1" class="optionLabel"><span class="letterSpan">A</span> <span class="optionTextSpan">option1</span></label>
          <input id="option-2" name="options" type="radio" value="">
          <label for="option-2" class="optionLabel"><span class="letterSpan">A</span> <span class="optionTextSpan">option1</span></label>
          <input id="option-3" name="options" type="radio" value="">
          <label for="option-3" class="optionLabel"><span class="letterSpan">A</span> <span class="optionTextSpan">option1</span></label>
          <input id="option-4" name="options" type="radio" value="">
          <label for="option-4" class="optionLabel"><span class="letterSpan">A</span> <span class="optionTextSpan">option1</span></label>
        </div>
        <button id="answerBtn" class="answerBtn" type="button">Submit answer</button>
        </div>
      </div>
    </main>
  </div>
`
header(document.querySelector<HTMLElement>("#header")!);
renderQuizList(document.querySelector<HTMLDivElement>("#frontEndQuiz")!,quizzes,currentQuestionIndex);
