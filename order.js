const fatoora = document.getElementById("fatoora");
let count = 0;
//button for tabouli
const selectedElement = document.querySelector("#select");
const selectedQuantity = document.getElementById("qty");
const submit = document.getElementById("submit");

submit.addEventListener("click", function () {

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
    count += result;

    document.getElementById("price").innerHTML = "Cost: " + result + "$";
    fatoora.innerHTML = count + ".00$";


});

//button for kebbe
const submit2 = document.getElementById("submit2");
const selectedElement2 = document.querySelector("#select2");
const selectedQuantity2 = document.getElementById("qty2");
submit2.addEventListener("click", function () {

    const selectedsize2 = selectedElement2.value;
    const quantityvalue2 = selectedQuantity2.value;
    const selectedNumber2 = parseInt(quantityvalue2);

    let result = 0;

    if (selectedsize2 === 'option1') {
        result = selectedNumber2 * 12;
    }
    else if (selectedsize2 === 'option2') {
        result = selectedNumber2 * 20;
    }
    else if (selectedsize2 === 'option3') {
        result = selectedNumber2 * 45;

    }
    count += result;

    document.getElementById("price2").innerHTML = "Cost: " + result + "$";
    fatoora.innerHTML = count + ".00$";

});
//button for warak enab 
const submit3 = document.getElementById("submit3");
const selectedElement3 = document.querySelector("#select3");
const selectedQuantity3 = document.getElementById("qty3");
submit3.addEventListener("click", function () {

    const selectedsize3 = selectedElement3.value;
    const quantityvalue3 = selectedQuantity3.value;
    const selectedNumber3 = parseInt(quantityvalue3);

    let result = 0;

    if (selectedsize3 === 'option1') {
        result = selectedNumber3 * 10;
    }
    else if (selectedsize3 === 'option2') {
        result = selectedNumber3 * 20;
    }
    else if (selectedsize3 === 'option3') {
        result = selectedNumber3 * 45;

    }
    count += result;


    document.getElementById("price3").innerHTML = "Cost: " + result + "$";
    fatoora.innerHTML = count + ".00$";

});
//button for sheesh barak
const submit4 = document.getElementById("submit4");
const selectedElement4 = document.querySelector("#select4");
const selectedQuantity4 = document.getElementById("qty4");
submit4.addEventListener("click", function () {

    const selectedsize4 = selectedElement4.value;
    const quantityvalue4 = selectedQuantity4.value;
    const selectedNumber4 = parseInt(quantityvalue4);

    let result = 0;

    if (selectedsize4 === 'option1') {
        result = selectedNumber4 * 12;
    }
    else if (selectedsize4 === 'option2') {
        result = selectedNumber4 * 20;
    }
    else if (selectedsize4 === 'option3') {
        result = selectedNumber4 * 29;

    }
    count += result;

    document.getElementById("price4").innerHTML = "Cost: " + result + "$";
    fatoora.innerHTML = count + ".00$";

});

const submitOrder = document.getElementById("submitOrder");

submitOrder.addEventListener("click", function () {
    let result = 0;

})