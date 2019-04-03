function validateItems() {
  var nameUser = document.forms["contactForm"]["Name"].value;
  var emailUser = document.forms["contactForm"]["Email"].value;
  var phoneUser = document.forms["contactForm"]["Phone"].value;
  var m = document.forms["contactForm"]["Monday"].checked;
  var t = document.forms["contactForm"]["Tuesday"].checked;
  var w = document.forms["contactForm"]["Wednesday"].checked;
  var th = document.forms["contactForm"]["Thursday"].checked;
  var f = document.forms["contactForm"]["Friday"].checked;

  var alphaExp = /^[a-zA-Z]+$/;
  var nameOK = alphaExp.exec(nameUser);

  if (nameUser == "" || !nameOK) {
    alert("We require a valid name.");
    document.forms["contactForm"]["Name"].focus();
    return false;
  }

  if (emailUser == "") {
    alert("We require an email address.");
    document.forms["contactForm"]["Email"].focus();
    return false;
  }

  if (phoneUser == "" || isNaN(phoneUser)) {
    alert("A phone number must be filled in with valid numbers.");
    document.forms["contactForm"]["Phone"].focus();
    return false;
  }

  if (m == false && t == false && w == false && th == false && f == false) {
    alert("At least one day has to be selected.");
    document.forms["contactForm"]["Monday"].focus();
    return false;
  }

  alert("Information verfied, form submitted!");
  document.forms["contactForm"]["Name"].innerText = "";
  document.forms["contactForm"]["Email"].innerText = "";
  document.forms["contactForm"]["Phone"].innerText = "";
  document.forms["contactForm"]["inquiry"].value = "Catering";
  document.forms["contactForm"]["info"].value = "";
  document.forms["contactForm"]["choice1"].checked = true;
  document.forms["contactForm"]["Monday"].checked = false;
  document.forms["contactForm"]["Tuesday "].checked = false;
  document.forms["contactForm"]["Wednesday"].checked = false;
  document.forms["contactForm"]["Thursday"].checked = false;
  document.forms["contactForm"]["Friday"].checked = false;

  return false;
}
