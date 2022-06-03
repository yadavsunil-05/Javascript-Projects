const toDoBlock = document.querySelector('#to-do-block')
let idCnt = 0; //For Unique Id

const createToDoDiv = (todoInput, todoPriority, datetime) => {
  const todoCardDiv = document.createElement("div");
  const cardHeaderdiv = document.createElement('div');
  const priorityDisplaySpan = document.createElement('span');
  const deadlineDisplaySpan = document.createElement('span');
  const cardBodyDiv = document.createElement('div');
  const cardTitleH5 = document.createElement('h5');
  const deleteButton = document.createElement('a');

  priorityDisplaySpan.textContent = `${todoPriority} Priority`;
  deadlineDisplaySpan.textContent = `${datetime}`
  cardTitleH5.textContent = `${todoInput}`
  deleteButton.textContent = "Delete"

  todoCardDiv.append(cardHeaderdiv)
  todoCardDiv.append(cardBodyDiv)
  cardHeaderdiv.append(priorityDisplaySpan)
  cardHeaderdiv.append(deadlineDisplaySpan)
  cardBodyDiv.append(cardTitleH5)
  cardBodyDiv.append(deleteButton)
  toDoBlock.append(todoCardDiv)

  todoCardDiv.setAttribute('class', "card to-do-card")
  todoCardDiv.setAttribute('id', `to-do-card-${idCnt}`)
  cardHeaderdiv.setAttribute('class', "card-header")
  cardBodyDiv.setAttribute('class', "card-body")
  cardTitleH5.setAttribute('class', "card-title")
  deleteButton.setAttribute("class", "btn btn-sm btn-danger")

  switch (todoPriority) {
    case 'High':
      priorityDisplaySpan.setAttribute('class', "badge rounded-pill bg-danger")
      break
    case 'Low':
      priorityDisplaySpan.setAttribute('class', "badge rounded-pill bg-info text-dark")
      break
    case 'Medium':
      priorityDisplaySpan.setAttribute('class', "badge rounded-pill bg-warning text-dark")
      break
  }
  idCnt++;
}