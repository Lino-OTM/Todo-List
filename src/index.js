import "./style.css";
import { Todo, TodoList } from "./js/classes";
import { crearTodoHtml } from "./js/componente-base";

export const todoList = new TodoList();

todoList.todos.forEach(crearTodoHtml);
