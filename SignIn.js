var emailregex =
  /^[a-zA-Z0-9.!#$%&'* +/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/;
var passwordregex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

document.getElementById("SignIn").onsubmit = function (event) {
  let emaildata = document.getElementById("Email").value;
  let pass = document.getElementById("Password").value;
  let evalid = false;
  let pvalid = false;
  let emailvalid = emailregex.test(emaildata);
  let passvalid = passwordregex.test(pass);
  if (emailvalid && emaildata !== "") {
    evalid = true;
  }
  if (passvalid && pass !== "") {
    pvalid = true;
  }
  if (evalid === false || pvalid === false) {
    document.getElementById("msg").style.display = "block";
    event.preventDefault();
  }
};
