export default function modeBtn(element:HTMLButtonElement):void{
    element.addEventListener("click",()=>{
        const body = document.querySelector<HTMLBodyElement>("body")!
        body.classList.toggle("light");
        element.classList.toggle("justify-start")
        body.classList.toggle("dark");
        element.classList.toggle("justify-end")    
      })
}