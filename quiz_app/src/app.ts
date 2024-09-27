import './style.css';
import { header } from './header.ts';
import { main } from './main.ts';
import data from './data.json'

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

const {quizzes} = data;
console.log(quizzes);
let selectedQuiz: Quizzes = {
  title:"",
  icon:"",
  questions:[]
};

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <header id="header">
    </header>
    <main id="main">
      
    </main>
  </div>
`
header(document.querySelector<HTMLElement>("#header")!);
main(document.querySelector<HTMLElement>('#main')!,quizzes,selectedQuiz);


