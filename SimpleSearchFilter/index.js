const searchFunc = () => {
  let filter = document.getElementById('myInput').value.toUpperCase();
  let myTable = document.getElementById('mytable');
  let trTag = myTable.getElementsByTagName('tr');

  for (let i = 0; i < trTag.length; i++) {
    let tdata = trTag[i].getElementsByTagName('td')[0]
    if (tdata) {
      let text = tdata.textContent;
      if (!text.toUpperCase().includes(filter)) {
        trTag[i].style.display = 'none'
      }
    }
  }
}

setInterval(() => {
  new Date().getTime;
}, 1000)


