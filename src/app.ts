// <li>
//   <label for="task-1">Wyprowadzić psa</label>
//   <inputt type="checkbox" id="task-1" name="Wyprowadzić psa" />
// </li>;

const taskNameInputElement: HTMLInputElement = document.querySelector("#name");
const addButtonElement: HTMLButtonElement = document.querySelector("button");

const tasksContainerElement: HTMLElement = document.querySelector(".tasks");

const tasks: {
  name: string;
  done: boolean;
}[] = [
  { name: "Wyprowadzić psa", done: false },
  { name: "Iść na siłke", done: false },
  { name: "Uczyć się na fronta", done: true },
];

const render = () => {
  tasksContainerElement.innerHTML = "";
  tasks.forEach((task) => {
    const taskElement: HTMLElement = document.createElement("li");
    taskElement.innerText = task.name;
    tasksContainerElement.appendChild(taskElement);
  });
};

const addTask = (taskName: string) => {
  tasks.push({ name: taskName, done: false });
};
addButtonElement.addEventListener("click", (event: Event) => {
  event.preventDefault();
  addTask(taskNameInputElement.value);
  render();
});

render();
