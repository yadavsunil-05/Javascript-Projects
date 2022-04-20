let calculateInterest = function () {
  let bal1 = Number(document.getElementById('bank-balance-1').value);
  let bal2 = Number(document.getElementById('bank-balance-2').value);
  let bal3 = Number(document.getElementById('bank-balance-3').value);
  let bal4 = Number(document.getElementById('bank-balance-4').value);
  let bal5 = Number(document.getElementById('bank-balance-5').value);

  let arr = [bal1, bal2, bal3, bal4, bal5];

  for (let i = 0; i < arr.length; i++) {
    arr[i] = Number(arr[i]);
    if (arr[i] > 200000) {
      arr[i] = (arr[i] + arr[i] * 0.10) - (arr[i] * 0.002);
    }
    else if (arr[i] + arr[i] > 100000) {
      arr[i] = (arr[i] * 0.05) - (arr[i] * 0.0005);
    }
    else {
      arr[i] = arr[i] + (arr[i] * 0.03);
    }
  }

  let id = ['bal1', 'bal2', 'bal3', 'bal4', 'bal5']

  for (let i = 0; i < arr.length; i++) {
    document.getElementById(id[i]).value = arr[i];
  }
  // document.getElementById('bal1').value = arr[0];
  // document.getElementById('bal2').value = arr[1];
  // document.getElementById('bal3').value = arr[2];
  // document.getElementById('bal4').value = arr[3];
  // document.getElementById('bal5').value = arr[4];
}