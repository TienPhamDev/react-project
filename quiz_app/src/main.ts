import { Quizzes } from './app.ts';
import { renderQuizList } from './renderQuizList.ts';

export const main = (element:HTMLElement,dataQuizzes:Array<Quizzes>,chooseQuizzse:Quizzes):void =>{
    
    const h1 = document.createElement("h1")
    const span = document.createElement("span")
    const ul = document.createElement("ul") 
    h1.textContent = `Welcome to the Frontend Quiz!`
    span.textContent= `Pick a subject to get started.`
    ul.className = "quizTitle";
    ul.id = "renderTitle"    
    element.append(h1,span,ul)

    renderQuizList(document.querySelector<HTMLUListElement>("#renderTitle")!,dataQuizzes,chooseQuizzse);
    

}
