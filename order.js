const table2 = document.getElementById("table2");
const fatoora = document.getElementById("fatoora");

// function checkorder(a, b) {
//     if (a != 0) {
//         table2.innerHTML = b;
//     } else {
//         table2.innerHTML = "";
//     }
// }



let count = 0;
let result = 0;

function checkorder(a, b, small, medium, large) {
    let result = 0;
    if (a === 'option1') {
        result = b * small;

    }
    else if (a === 'option2') {
        result = b * medium;

    }
    else if (a === 'option3') {
        result = b * large;

    }
    else if (a === 'option4') {
        result = 0;

    }
    return result;
}




//button for tabouli
const selectedElement = document.querySelector("#select");
const selectedQuantity = document.getElementById("qty");
const submit = document.getElementById("submit");

submit.addEventListener("click", function () {

    const selectedsize = selectedElement.value;
    const quantityvalue = selectedQuantity.value;
    const selectedNumber = parseInt(quantityvalue);


    count += checkorder(selectedsize, selectedNumber, 9, 13, 15);

    document.getElementById("price").innerHTML = "Cost: " + checkorder(selectedsize, selectedNumber, 9, 13, 15) + "$";
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


    count += checkorder(selectedsize2, selectedNumber2, 12, 20, 45);

    document.getElementById("price2").innerHTML = "Cost: " + checkorder(selectedsize2, selectedNumber2, 12, 20, 45) + "$";

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


    count += count += checkorder(selectedsize3, selectedNumber3, 10, 20, 45);;

    document.getElementById("price3").innerHTML = "Cost: " + checkorder(selectedsize3, selectedNumber3, 10, 20, 45) + "$";
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


    count += checkorder(selectedsize4, selectedNumber4, 12, 20, 29);


    document.getElementById("price4").innerHTML = "Cost: " + checkorder(selectedsize4, selectedNumber4, 12, 20, 29) + "$";
    fatoora.innerHTML = count + ".00$";

});






