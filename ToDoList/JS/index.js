
const btn = document.querySelector('.modal-footer .Create-To-Do')

btn.addEventListener('click', () => {
  let todoInput = document.querySelector('#todo-input').value
  let todoPriority = document.querySelector('#todo-priority-input').value
  let todoDeadline = document.querySelector('#todo-deadline').value
  let datetime = new Date(todoDeadline).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric"
  })
  createToDoDiv(todoInput, todoPriority, datetime)
})



