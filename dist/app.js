import { render } from "./helpers/renders.js";
import { renderCategories } from "./helpers/render-categories.js";
const taskNameInputElement = document.querySelector("#name");
const addButtonElement = document.querySelector("button");
const tasksContainerElement = document.querySelector(".tasks");
const categoriesContainerElement = document.querySelector(".categories");
let selectedCategory;
const categories = ["general", "work", "gym", "hobby"];
const tasks = [
    { name: "Wyprowadzić psa", done: false, category: "hobby" },
    { name: "Iść na siłke", done: false, category: "gym" },
    { name: "Uczyć się na fronta", done: true, category: "work" },
    { name: "Wyrzucić śmieci", done: false },
];
const addTask = (task) => {
    tasks.push(task);
};
addButtonElement.addEventListener("click", (event) => {
    event.preventDefault();
    addTask({
        name: taskNameInputElement.value,
        done: false,
        category: selectedCategory,
    });
    render(tasks, tasksContainerElement);
});
renderCategories(categories, categoriesContainerElement, selectedCategory);
render(tasks, tasksContainerElement);
