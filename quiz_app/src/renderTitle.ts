import data from "./data.json";

export const renderTitle = (element : HTMLUListElement):void =>{
    data.quizzes.map((obj) => {
        const liElement = document.createElement("li");
        const button = document.createElement("button");
        const img = document.createElement("img")
        img.src = `${obj.icon}`;
        img.alt = `${obj.title}`;
        button.textContent = `${obj.title}`;
        button.appendChild(img)
        liElement.appendChild(button)
        element.appendChild(liElement)           
        });
}