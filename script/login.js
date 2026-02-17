console.log("file connected");

document.getElementById("login-btn").addEventListener("click", function () {
  /**
   * 1- get the mobile number
   * 2- get the pin input
   * 3- match the pin and mobile number
   * 3-1 true:::>> alert> Homepage
   * 3-1 false:::>> alert> return
   */
  const numberInput = document.getElementById("input-number");
  const contactNumber = numberInput.value;
  console.log(contactNumber);

  const pinInput = document.getElementById("input-pin");
  const pinNumber = pinInput.value;
  console.log(pinNumber);

  if (contactNumber == "01863674523" && pinNumber == "1234") {
    alert("Login Success");

    window.location.assign("./home.html");
  } else {
    alert("Login Failed");
    return;
  }
});
