import './style.css';
import { renderTitle } from './renderTitle.ts';
import { header } from './header.ts';


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

let quiz:{} = {};
document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <header id="header">
      
    </header>
    <main>
      <h1>Welcome to the Frontend Quiz!</h1>
      <h2>Pick a subject to get started.</h2>
      <ul class = "quizTitle" id = "renderTitle">
      </ul>
    </main>
  </div>
`
header(document.querySelector<HTMLElement>("#header")!);
renderTitle(document.querySelector<HTMLUListElement>("#renderTitle")!);

