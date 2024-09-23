import { Quizzes } from './app.ts';
import { renderTitle } from './renderTitle.ts';

export const main = (element:HTMLElement,dataQuizzes:Array<Quizzes>):void =>{
    const h1 = document.createElement("h1")
    const h2 = document.createElement("h2")
    const ul = document.createElement("ul") 
    
    h1.textContent = `Welcome to the Frontend Quiz!`
    h2.textContent= `Pick a subject to get started.`
    ul.className = "quizTitle";
    ul.id = "renderTitle"    
    element.append(h1,h2,ul)

    renderTitle(document.querySelector<HTMLUListElement>("#renderTitle")!,dataQuizzes);
}
