/* exported todos */

let todos = [];
const previousTodosJSON = localStorage.getItem('javascript-local-storage');
if (previousTodosJSON !== null) {
  todos = JSON.parse(previousTodosJSON);
}

window.addEventListener('beforeunload', function () {
  const todosJSON = JSON.stringify(todos);
  console.log(todosJSON);
  localStorage.setItem('javascript-local-storage', todosJSON);
});
