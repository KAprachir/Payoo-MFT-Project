document.getElementById("cashout-btn").addEventListener("click", function () {
  // 1- get the agent number and validate
  const cashoutNumberInput = document.getElementById("cashout-number");
  const cashoutNumber = cashoutNumberInput.value;
  console.log(cashoutNumber);
  if (cashoutNumber.length != 11) {
    alert("invalid Number");
    return;
  }
  // 2- get the amount , validate , convert to Number
  const cashoutAmountInput = document.getElementById("cashout-amount");
  const cashoutAmount = cashoutAmountInput.value;
  console.log(cashoutAmount);
  // 3- get the Current balance
  const balanceElement = document.getElementById("balance");
  const balance = balanceElement.innerText;
  console.log(balance);
  // 4- calculate the balance
  const newBalance = Number(balance) - Number(cashoutAmount);

  if (newBalance < 0) {
    alert("Invalid Amount");
    return;
  }

  // 5- get the pin and verify
  const cashoutPinInput = document.getElementById("cashout-pin");
  const pin = cashoutPinInput.value;
  if (pin === "1234") {
    // 5:1- true::::> show an alert > set new Balance
    alert("Cashout Successfull");
    console.log("new Balance", newBalance);
    balanceElement.innerText = newBalance;
  } else {
    // 5:2- false:::> show an error > return
    alert("Invalid Pin");
    return;
  }
});
