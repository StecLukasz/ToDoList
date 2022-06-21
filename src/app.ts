import { render } from "./helpers/renders.js";
import { Task, Category } from "./types/types";
import { renderCategories } from "./helpers/render-categories.js";

const taskNameInputElement: HTMLInputElement = document.querySelector("#name");
const addButtonElement: HTMLButtonElement = document.querySelector("button");
const tasksContainerElement: HTMLElement = document.querySelector(".tasks");
const categoriesContainerElement: HTMLElement =
  document.querySelector(".categories");

let selectedCategory: Category;

const categories: Category[] = ["general", "work", "gym", "hobby"];

const tasks: Task[] = [
  { name: "Wyprowadzić psa", done: false, category: "hobby" },
  { name: "Iść na siłke", done: false, category: "gym" },
  { name: "Uczyć się na fronta", done: true, category: "work" },
  { name: "Wyrzucić śmieci", done: false },
];

const addTask = (task: Task) => {
  tasks.push(task);
};
addButtonElement.addEventListener("click", (event: Event) => {
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
