import { Quizzes } from './app.ts';
import { renderQuizList } from './renderQuizList.ts';
import { renderQuestion } from './renderQuestion.ts';
export const main = (element:HTMLElement,dataQuizzes:Array<Quizzes>,chooseQuizzse:Quizzes):void =>{


    renderQuizList(document.querySelector<HTMLUListElement>("#quizTittle")!,dataQuizzes,currentQuestionIndex);

}
