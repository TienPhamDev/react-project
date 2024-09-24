import { Quizzes } from "./app";
export const renderTitle = (element : HTMLUListElement,dataQuizzes:Array<Quizzes>,chooseQuizzse:Quizzes):void =>{
    dataQuizzes.map((el) => {
        const liElement = document.createElement("li");
        const button = document.createElement("button");
        const span =document.createElement("span")
        const img = document.createElement("img")
        img.src = `${el.icon}`;
        img.alt = `${el.title}`;
        span.textContent = `${el.title}`
        button.id = `${el.title}`
        button.appendChild(img)
        button.appendChild(span)
        liElement.appendChild(button)
        element.appendChild(liElement)         
        
        button.addEventListener("click" ,()=>{
            if(button.id === el.title){
                chooseQuizzse.title = el.title
                chooseQuizzse.icon = el.icon
                chooseQuizzse.questions = el.questions
                
                const main = document.querySelector<HTMLElement>('#main')!;
                
                main.children[2].remove();
                main.firstElementChild!.textContent=`${el.questions[0].question}`;
                main.children[1].textContent = "";
                const ul = document.createElement("ul")
                ul.className = 'options'
                ul.id = 'options'
                main.appendChild(ul)
                const options = el.questions.find((e)=> e.options)
                console.log(options?.options);
                options?.options.map((el)=>{
                    const newLi = document.createElement("li");
                    newLi.textContent= `${el}`
                    main.lastElementChild?.appendChild(newLi)
                })
            }
        })  
    }
        
    );
}
