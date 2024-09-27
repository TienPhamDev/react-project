import { Quizzes } from './app.ts';
import { renderQuizList } from './renderQuizList.ts';
import { renderQuestion } from './renderQuestion.ts';
export const main = (element:HTMLElement,dataQuizzes:Array<Quizzes>,chooseQuizzse:Quizzes):void =>{
    let currentQuestionIndex = 0;
    const div = document.createElement("div") 
    
    div.className = "quizTitle";
    div.id = "renderQuestions"
    
    element.append(div)

    renderQuizList(document.querySelector<HTMLUListElement>("#renderQuestions")!,dataQuizzes,chooseQuizzse,currentQuestionIndex);

}
