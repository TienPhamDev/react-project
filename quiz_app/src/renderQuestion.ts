import { Questions } from "./app";

export const renderQuestion= (mainElement:HTMLElement,index:number,selectedQuiz:Array<Questions>):void =>{
    let question = selectedQuiz[index]
    const questionDiv = document.createElement("div")
    const questions= document.createElement("h3")
    const optionDiv = document.createElement("div")
    questions.textContent = `${question.question}`
    optionDiv.id = "optionDiv";
    
    
    question.options.map((option:string,optionIndex:number)=>{
        const label = document.createElement("label")
        const radioInput  = document.createElement("input")
        
        label.textContent=`${option}`
        label.htmlFor=`option-${optionIndex}`
        radioInput.name = `option`
        radioInput.type = "radio"
        radioInput.id = `option-${optionIndex}`
        radioInput.value = `${option}`
        optionDiv.append(radioInput,label)
        radioInput.addEventListener("click",()=>{
            if(radioInput.value === question.answer){
                console.log("right");
                
            }else{
                console.log("wrong");
                
            }
        })
    })
        questionDiv.append(questions,optionDiv)
        
    mainElement.appendChild(questionDiv)


}