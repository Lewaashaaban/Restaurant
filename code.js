function newpage() {

  window.location = "menu.html";
}
function home() {
  alert("This is the home page ");
}
function about() {
  window.location = "about.html";
}
function contact() {
  alert("Contect us : +961 03346678  call or message  ");
}
function homepage() {
  window.location = "loginpage.html";
}
function orderonline() {

  window.location = "order.html";

}


const selectedElement = document.querySelector("#select");
const selectedQuantity = document.getElementById("qty");
const submit = document.getElementById("submit");





submit.addEventListener("click", function (event) {
  event.preventDefault();
  const selectedsize = selectedElement.value;
  const quantityvalue = selectedQuantity.value;
  const selectedNumber = parseInt(quantityvalue);

  let result = 0;

  if (selectedsize === 'option1') {
    result = selectedNumber * 9;
  }
  else if (selectedsize === 'option2') {
    result = selectedNumber * 13;
  }
  else if (selectedsize === 'option3') {
    result = selectedNumber * 15;
  }
  document.getElementById("price").innerHTML = "result is " + result + "$";

})

