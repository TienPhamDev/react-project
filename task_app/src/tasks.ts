const taskForm = document.querySelector<HTMLFormElement>('.form')
const inputForm = document.querySelector<HTMLInputElement>(".form-input");
const btn = document.querySelector<HTMLButtonElement>(".btn")
const taskList = document.querySelector<HTMLUListElement>(".list")

const addTask = (task:Task):void => {
  tasks.push(task);
  console.log(task);
  
}
const renderTask = (task:Task):void => {
  const liElement = document.createElement("li");
  liElement.textContent = task.description

  //checkbox 
  const taskCheckBox = document.createElement("input");
  taskCheckBox.type = 'checkbox';
  taskCheckBox.checked = task.isCompleted;

  // toggle checkbox
  taskCheckBox.addEventListener("change",()=>{
    task.isCompleted = !task.isCompleted
    updateStorage();
  })
  liElement.appendChild(taskCheckBox);
  taskList?.appendChild(liElement);

}
const updateStorage = ():void =>{
  localStorage.setItem("tasks",JSON.stringify(tasks))
}

const loadTasks = ():Task[] => {
  const storedTasks = localStorage.getItem("tasks")
  return storedTasks? JSON.parse(storedTasks):[]
}
interface Task  {
  description : string
  isCompleted : boolean
};

const tasks:Task[] = loadTasks();
tasks.forEach(renderTask)


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
      updateStorage()
      inputForm.value = "";
      return 
    }
    alert("please enter you task.")
  
  
}

taskForm?.addEventListener("submit",createTask);
