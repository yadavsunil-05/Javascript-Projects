const toDoBlock = document.querySelector('#to-do-block')
const btn = document.querySelector('.modal-footer .Create-To-Do')

btn.addEventListener('click', (e) => {
  createToDoDiv()
})

const createToDoDiv = () => {
  const todoCardDiv = document.createElement("div");
  const cardHeaderdiv = document.createElement('div');
  const priorityDisplaySpan = document.createElement('span');
  const deadlineDisplaySpan = document.createElement('span');
  const cardBodyDiv = document.createElement('div');
  const cardTitleH5 = document.createElement('h5');
  const deleteButton = document.createElement('a');

  priorityDisplaySpan.textContent = "Low Priority";
  deadlineDisplaySpan.textContent = "May 27, 2022, 4:20:00 PM"
  cardTitleH5.textContent = "Complete Rev of Async Await"
  deleteButton.textContent = "Delete"

  todoCardDiv.append(cardHeaderdiv)
  todoCardDiv.append(cardBodyDiv)
  cardHeaderdiv.append(priorityDisplaySpan)
  cardHeaderdiv.append(deadlineDisplaySpan)
  cardBodyDiv.append(cardTitleH5)
  cardBodyDiv.append(deleteButton)
  toDoBlock.append(todoCardDiv)

  todoCardDiv.setAttribute('class', "card to-do-card")
  // todoCardDiv.setAttribute('id',"test-id")
  cardHeaderdiv.setAttribute('class', "card-header")
  priorityDisplaySpan.setAttribute('class', "badge rounded-pill bg-warning text-dark")
  cardBodyDiv.setAttribute('class', "card-body")
  cardTitleH5.setAttribute('class', "card-title")
  deleteButton.setAttribute("class", "btn btn-sm btn-danger")
}

/*
<div class="card to-do-card" id="test-id" draggable="true" ondragstart="toDoDragStart(event)">
  <div class="card-header">
    <span class="badge rounded-pill bg-info text-dark">Low Priority</span>
    <span>May 27, 2022, 4:20:00 PM</span>
  </div>
  <div class="card-body">
    <h5 class="card-title">Task 111</h5>
    <a class="btn btn-sm btn-danger">Delete</a>
  </div>
</div>
  */