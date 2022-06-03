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

let toDoBlockEvent = document.querySelector('#to-do-block')
let inprogessBlockEvent = document.querySelector('#in-progress-block')
let completeBlockEevnt = document.querySelector('#completed-block')

toDoBlockEvent.addEventListener('drop')





function abc() {
  console.log("Drag evenet")
}
function abc2() {
  console.log("Drag evenet 2")
}

function allowDrop(event) {
  event.preventDefault()
}






/* 
https://www.w3schools.com/jsref/event_ondrag.asp
Draggable Element:- (Element which we want to drag child ele)
1) darggable = true
2) ondragStart()
3) ondrag

Parent Element (Where you have to drop the draggable element)
1) ondragover
2) ondrop
*/

