const btn = document.querySelector(".modal-footer .Create-To-Do");

// Applying the Drag and Drop EventListener to Parent Container
let toDoBlockEvent = document.querySelector("#to-do-block");
let inprogessBlockEvent = document.querySelector("#in-progress-block");
let completeBlockEevnt = document.querySelector("#completed-block");

const parentContainerBlock = [
  toDoBlockEvent,
  inprogessBlockEvent,
  completeBlockEevnt,
];

parentContainerBlock.forEach((ele) => {
  ele.addEventListener("dragover", (event) => {
    event.preventDefault();
  });
  ele.addEventListener("drop", (event) => {
    let cardDraggedId = event.dataTransfer.getData("ToDoCard");
    let cardDraggedChild = document.getElementById(cardDraggedId);
    let currParentDiv = event.target;
    currParentDiv.append(cardDraggedChild);
  });
});

btn.addEventListener("click", () => {
  let todoInput = document.querySelector("#todo-input").value;
  let todoPriority = document.querySelector("#todo-priority-input").value;
  let todoDeadline = document.querySelector("#todo-deadline").value;
  let datetime = new Date(todoDeadline).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  });

  //Creating the To do Card
  createToDoDiv(todoInput, todoPriority, datetime);

  // Applying the Drag and Drop EventListener to Children Card
  let todoCardEvent = document.querySelectorAll(".to-do-card");
  todoCardEvent.forEach((ele) => {
    ele.addEventListener("dragstart", (event) => {
      let cardDraggedId = event.target.id;
      event.dataTransfer.setData("ToDoCard", cardDraggedId);
    });
  });

  let deleteBtn = document.querySelectorAll(".btn-sm")
  for (let ele of deleteBtn) {
    ele.addEventListener('click', () => ele.parentNode.parentNode.remove())
  }
});

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
