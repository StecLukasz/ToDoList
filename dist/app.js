// <li>
//   <label for="task-1">Wyprowadzić psa</label>
//   <inputt type="checkbox" id="task-1" name="Wyprowadzić psa" />
// </li>;
const taskNameInputElement = document.querySelector("#name");
const addButtonElement = document.querySelector("button");
const tasksContainerElement = document.querySelector(".tasks");
const tasks = [
    { name: "Wyprowadzić psa", done: false },
    { name: "Iść na siłke", done: false },
    { name: "Uczyć się na fronta", done: true },
];
const render = () => {
    tasksContainerElement.innerHTML = "";
    tasks.forEach((task) => {
        const taskElement = document.createElement("li");
        taskElement.innerText = task.name;
        tasksContainerElement.appendChild(taskElement);
    });
};
const addTask = (taskName) => {
    tasks.push({ name: taskName, done: false });
};
addButtonElement.addEventListener("click", (event) => {
    event.preventDefault();
    addTask(taskNameInputElement.value);
    render();
});
render();
