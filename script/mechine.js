// getting value form input by id
function getValueFromInput(id) {
  const input = document.getElementById(id);
  const value = input.value;
  console.log(id, value);
  return value;
}

// mechine to get current balace
function getCurrentBalance() {
  const balanceElement = document.getElementById("balance");
  const balance = balanceElement.innerText;
  return Number(balance);
}

// meachine to set new balace
function setBalance(value) {
  const balanceElement = document.getElementById("balance");
  balanceElement.innerText = value;
}

// mechine get a and hide all and show a id
function showOnly(id) {
  const addMoney = document.getElementById("add-money");
  const cashOut = document.getElementById("cashout");
  // hidee all
  addMoney.classList.add("hidden");
  cashOut.classList.add("hidden");
  // select one to show by remove hide
  const select = document.getElementById(id);
  select.classList.remove("hidden");
}
