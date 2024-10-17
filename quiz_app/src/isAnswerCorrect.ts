import { Questions } from "./app";
export default function isAnswerCorrect(arrayOfRadio:Array<HTMLInputElement>,selectedQuestion:Array<Questions>,questionIndex:number,addOrRemove:"remove"|"add"):void{
    const correctLabel = arrayOfRadio.find((radio)=> radio.value === selectedQuestion[questionIndex].answer)!;
    const showCorrectAnswer = document.querySelector<HTMLLabelElement>(`label[for=${correctLabel.id}]`)
    const lastSpanLabelCorrect = showCorrectAnswer?.lastElementChild;
    const childrenSpanLabelCorrect = lastSpanLabelCorrect!.children;
    if(addOrRemove === "remove"){
        childrenSpanLabelCorrect[0].classList.remove("hidden")
    }else{
        childrenSpanLabelCorrect[0].classList.add("hidden")
    }
}