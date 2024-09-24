import { Quizzes } from "./app";
export const renderQuizList = (element : HTMLUListElement,dataQuizzes:Array<Quizzes>,selectedQuiz:Quizzes):void =>{
    dataQuizzes.map((quiz,quizIndex) => {
        const liElement = document.createElement("li");
        const button = document.createElement("button");
        const span =document.createElement("span")
        const img = document.createElement("img")
        img.src = `${quiz.icon}`;
        img.alt = `${quiz.title}`;
        span.textContent = `${quiz.title}`
        button.id = `${quiz.title}`
        button.appendChild(img)
        button.appendChild(span)
        liElement.appendChild(button)
        element.appendChild(liElement)

        button.addEventListener("click" ,()=>{
            if(button.id === quiz.title){
                selectedQuiz.title = quiz.title
                selectedQuiz.icon = quiz.icon
                selectedQuiz.questions = quiz.questions
                
                const main = document.querySelector<HTMLElement>('#main')!;
                
                main.children[2].remove();
                
                main.firstElementChild!.textContent=`${quiz.questions[quizIndex].question}`;
                let questionsIndex:number = 0;
                main.children[1].textContent = "";
                
                const ul = document.createElement("ul")
                ul.className = 'options'
                ul.id = 'options'
                main.appendChild(ul)
                
            }
        })  
    }
        
    );
}
