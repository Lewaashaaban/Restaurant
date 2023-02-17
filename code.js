function newpage() {
  window.location = "menu.html";
}
function home() {
  alert("This is the home page ")
}
function about() {
  window.location = "about.html"
}
function contact() {
  alert("Contect us : +961 03346678  call or message  ")
}
function homepage() {
  window.location = "loginpage.html"
}
function orderonline() {
  window.location = "order.html"
}

function calc(event) {
  event.preventDefault();
  let qty = document.getElementById("qty").value;
  let select = document.getElementById("size");
  var selectedOption = select.options[select.selectedindex];
  var selectedtext = selectedOption.text;
  let result = 0;

  if (selectedtext === "Small $9.00") {
    { result = qty * 9; }
  }
  if (selectedOption === "option2") {
    { result = qty * 13; }
  }
  if (selectedOption === "option3") {
    { result = qty * 15; }
  }
  document.getElementById("result1").innerHTML = "payment is:" + result + "$$";
}

