
export const renderQuestion = (element:HTMLElement):void =>{
    element.addEventListener("click" ,()=>{
        if(element.id === el.title){
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