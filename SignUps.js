var emailregex =
  /^[a-zA-Z0-9.!#$%&'* +/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/;
var passwordregex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
var nregex = /^[a-zA-Z]{2,}$/;

document.getElementById("SignUps").onsubmit = function (e) {
  let fn = document.getElementById("Fname").value;
  let ln = document.getElementById("Lname").value;
  let emaildata = document.getElementById("Email").value;
  let pass = document.getElementById("Cpass").value;
  let conpass = document.getElementById("ConPass").value;
  let fnvalid = false;
  let lnvalid = false;
  let evalid = false;
  let pvalid = false;
  let cpvalid = false;
  let fnameValid = nregex.test(fn);
  let lnameValid = nregex.test(ln);
  let emailValid = emailregex.test(emaildata);
  let passValid = passwordregex.test(pass);
  if (fnameValid && fn !== "") {
    document.getElementById("fnamemsg").style.display = "none";
    fnvalid = true;
  } else {
    document.getElementById("fnamemsg").style.display = "block";
  }
  if (lnameValid && ln !== "") {
    document.getElementById("lnamemsg").style.display = "none";
    lnvalid = true;
  } else {
    document.getElementById("lnamemsg").style.display = "block";
  }
  if (emailValid && emaildata !== "") {
    document.getElementById("mailmsg").style.display = "none";
    evalid = true;
  } else {
    document.getElementById("mailmsg").style.display = "block";
  }
  if (passValid && pass !== "") {
    document.getElementById("passmsg").style.display = "none";
    pvalid = true;
  } else {
    document.getElementById("passmsg").style.display = "block";
  }
  if (pass === conpass && pass !== "" && conpass !== "") {
    document.getElementById("conmsg").style.display = "none";
    cpvalid = true;
  } else {
    document.getElementById("conmsg").style.display = "block";
  }

  if (
    fnvalid === false ||
    lnvalid === false ||
    evalid === false ||
    pvalid === false ||
    cpvalid === false
  ) {
    e.preventDefault();
  }
};
