import { renderQuestion } from "./renderQuestion";
import { Quizzes } from "./app";
export const renderQuizList = (element : HTMLUListElement,dataQuizzes:Array<Quizzes>,selectedQuiz:Quizzes,indexQuestion:number):void =>{
    dataQuizzes.map((quiz) => {
        
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
            const selectedQuiz = quiz.questions
            console.log(selectedQuiz);
            const main = document.querySelector<HTMLElement>('#main')!;
            let currentQuestionIndex = indexQuestion;
    
            // const question = selectedQuiz[currentQuestionIndex]
           
            renderQuestion(main,currentQuestionIndex,selectedQuiz);
            
            const answerBtn = document.createElement("button");
                
            answerBtn.textContent = "Answer"
            main.appendChild(answerBtn)
            
        })//button

        
    })//end map
    
}
