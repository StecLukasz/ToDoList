// <li>
//   <label for="task-1">Wyprowadzić psa</label>
//   <inputt type="checkbox" id="task-1" name="Wyprowadzić psa" />
// </li>;

const taskNameInputElement: HTMLInputElement = document.querySelector("@name");
const addButtonElement: HTMLButtonElement = document.querySelector("button");

const tasksContainerElement: HTMLElement = document.querySelector(".tasks");

const tasks: string[] = ["Wyprowadzić psa", "Iść na siłke"];

const render = () => {
  tasks.forEach((task) => {
    const taskElement: HTMLElement = document.createElement("li");
    taskElement.innerText = task;
    tasksContainerElement.appendChild(taskElement);
  });
};

const addTask=(task: string) => {
    tasks.push(task);
}
addButtonElement.addEventListener("click", (event: Event)=>{
event.preventDefault();
})


render();