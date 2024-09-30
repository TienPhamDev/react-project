import { renderQuestion } from "./renderQuestion";
import { Quizzes } from "./app";
export const renderQuizList = (element : HTMLElement,dataQuizzes:Array<Quizzes>,currentQuestionIndex:number):void =>{
    dataQuizzes.map((quiz,indexQuiz) => {
        const divElement = document.createElement("div");
        const button = document.createElement("button");
        const span =document.createElement("span")
        const img = document.createElement("img")
        img.src = `${quiz.icon}`;
        img.alt = `${quiz.title}`;
        span.textContent = `${quiz.title}`
        button.id = `${quiz.title}`
        button.appendChild(img)
        button.appendChild(span)
        divElement.appendChild(button)
        element.appendChild(divElement)
        
        button.addEventListener("click" ,()=>{
            const selectedQuiz = quiz.questions
            console.log(selectedQuiz);

            renderQuestion(document.querySelector<HTMLElement>("#questions")!,currentQuestionIndex,selectedQuiz)!


            const answerBtn = document.querySelector<HTMLButtonElement>("#answerBtn")!;
            answerBtn.addEventListener("click",()=>{
                if(currentQuestionIndex < selectedQuiz.length - 1){
                    currentQuestionIndex++;
                    renderQuestion(document.querySelector<HTMLElement>("#questions")!,currentQuestionIndex,selectedQuiz)!
                    console.log("under 10");
                    
                }
    })
        })//button

        
    })//end map
    
}
