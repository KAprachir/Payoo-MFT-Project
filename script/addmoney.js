document.getElementById("add-money-btn").addEventListener("click", function () {
  //1- select a bank
  const bankAccount = getValueFromInput("add-money-bank");
  if (bankAccount == "Select back") {
    alert("Please Select A Bank");
    return;
  }
  //   2- get bank account number
  const accno = getValueFromInput("add-money-number");
  if (accno.length != 11) {
    alert("Invalid Account Number");
    return;
  }
  //   get amount
  const amount = getValueFromInput("add-money-amount");
  const newBalance = getCurrentBalance() + Number(amount);

  //   pin varify
  const pin = getValueFromInput("add-money-pin");
  if (pin == "1234") {
    alert(`Added Money Successfully from ${bankAccount} ${new Date()}`);
    setBalance(newBalance);
  } else {
    alert("Invalid Pin");
    return;
  }
});
