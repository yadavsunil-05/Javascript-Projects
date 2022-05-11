const searchFunc = () => {
  let filter = document.getElementById('myInput').value.toUpperCase();
  let myTable = document.getElementById('mytable');
  let trTag = myTable.getElementsByTagName('tr');

  for (let i = 0; i < trTag.length; i++) {
    let td = trTag[i].getElementsByTagName('td')[0]
    if (td.textContent.toUpperCase().includes(filter)) {

    }
  }
}