const taskForm = document.querySelector<HTMLFormElement>('.form')
const inputForm = document.querySelector<HTMLInputElement>(".form-input");
const btn = document.querySelector<HTMLButtonElement>(".btn")
const taskList = document.querySelector<HTMLUListElement>(".list")

interface Task  {
  description : string
  isCompleted : boolean
};
const tasks:Task[] = [];

const addTask = (task:Task):void => {
  tasks.push(task);
  console.log(task);
  
}
const renderTask = (task:Task):void => {
  const liElement = document.createElement("li");
  liElement.textContent = task.description
  taskList?.appendChild(liElement);

}
const createTask = (e:SubmitEvent) => {
  
    e.preventDefault();
    const taskDescription = inputForm?.value;
    if (taskDescription){
      const task:Task = {
        description: taskDescription,
        isCompleted:false,
      }
      addTask(task);
      // Add task to list

      renderTask(task)
      // render task
      inputForm.value = "";
      return 
    }
    alert("please enter you task.")
  
  
}

taskForm?.addEventListener("submit",createTask);