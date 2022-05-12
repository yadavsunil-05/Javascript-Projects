const searchFunc = () => {
  let filter = document.getElementById('myInput').value.toUpperCase();
  let myTable = document.getElementById('mytable');
  let trTag = myTable.getElementsByTagName('tr');

  for (let i = 0; i < trTag.length; i++) {
    let tdata = trTag[i].getElementsByTagName('td')[0]
    // let text = td.innerText;
    console.log(tdata.innerText)
    // if (text.toUpperCase().includes(filter)) {
    //   trTag[i].style.display = 'block'
    // }
    // else {
    //   trTag[i].style.display = 'none'
    // }
  }
}