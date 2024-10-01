import { Questions } from "./app";

export const renderQuestion= (divQuestions:HTMLElement,currentQuestionIndex:number,selectedQuiz:Array<Questions>):void =>{


    divQuestions.firstElementChild!.textContent = `${selectedQuiz[currentQuestionIndex].question}`;         
            
    selectedQuiz[currentQuestionIndex].options.map((option:string,optionIndex:number)=>{
        const label = document.querySelectorAll<HTMLLabelElement>("label")[optionIndex]!
        const radioInput  = document.querySelectorAll<HTMLInputElement>("input")[optionIndex]!
        
        label.textContent=`${option}`
        label.htmlFor=`option-${optionIndex}`
        radioInput.id = `option-${optionIndex}`
        radioInput.value = `${option}`
        
        
    })
    

}