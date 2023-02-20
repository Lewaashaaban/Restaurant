// js for the receipt part
let date = document.getElementById("date");
let today = new Date();

date.innerHTML = today.getDate() + "/" + today.getMonth() + "/" + today.getFullYear();



//fill first row
const selectedsizestr = localStorage.getItem('selectedsize');
const selectedsize = parseInt(selectedsizestr);


const selectedquantitystr = localStorage.getItem('Rqty');
const selectedquantity = parseInt(selectedquantitystr);

const Foodname = localStorage.getItem('Foodname');


const Rqty = document.getElementById("Rqty");
const Rfoodname = document.getElementById("Rfoodname");
const Rprice = document.getElementById("Rprice");

Rprice.innerHTML = selectedsizestr + ".00$";
Rqty.innerHTML = selectedquantity;


if (Rprice != 0)
    Rfoodname.innerHTML = "Tabouli";

//fill second row
const selectedsizestr2 = localStorage.getItem('selectedsize2');
const selectedsize2 = parseInt(selectedsizestr2);

const selectedquantitystr2 = localStorage.getItem('Rqty2');
const selectedquantity2 = parseInt(selectedquantitystr2);

const Foodname2 = localStorage.getItem('Foodname2');


const Rqty2 = document.getElementById("Rqty2");
const Rfoodname2 = document.getElementById("Rfoodname2");
const Rprice2 = document.getElementById("Rprice2");

Rprice2.innerHTML = selectedsizestr2 + ".00$";
Rqty2.innerHTML = selectedquantity2;

if (Rprice2 != 0)
    Rfoodname2.innerHTML = "Kebbe";


//fill third row
const selectedsizestr3 = localStorage.getItem('selectedsize3');
const selectedsize3 = parseInt(selectedsizestr3);

const selectedquantitystr3 = localStorage.getItem('Rqty3');
const selectedquantity3 = parseInt(selectedquantitystr3);

const Foodname3 = localStorage.getItem('Foodname3');


const Rqty3 = document.getElementById("Rqty3");
const Rfoodname3 = document.getElementById("Rfoodname3");
const Rprice3 = document.getElementById("Rprice3");

Rprice3.innerHTML = selectedsizestr3 + ".00$";
Rqty3.innerHTML = selectedquantity3;

if (Rprice3 != 0)
    Rfoodname3.innerHTML = "Warak Enab";


//fill fourth row
const selectedsizestr4 = localStorage.getItem('selectedsize4');
const selectedsize4 = parseInt(selectedsizestr4);

const selectedquantitystr4 = localStorage.getItem('Rqty4');
const selectedquantity4 = parseInt(selectedquantitystr4);

const Foodname4 = localStorage.getItem('Foodname4');


const Rqty4 = document.getElementById("Rqty4");
const Rfoodname4 = document.getElementById("Rfoodname4");
const Rprice4 = document.getElementById("Rprice4");
inner = Rprice4.innerHTML;
Rprice4.innerHTML = selectedsizestr4 + ".00$";
Rqty4.innerHTML = selectedquantity4;

if (Rprice4 != 0)
    Rfoodname4.innerHTML = "Sheesh Barak";
else
    Rfoodname4.innerHTML = "";


document.getElementById("subtotal").innerHTML = parseInt(selectedsize4 + selectedsize3 + selectedsize2 + selectedsize) + ".00$";

//costumer info
const customername = localStorage.getItem('name');
const googlemaps = localStorage.getItem('googlemaps');

document.getElementById("customername").innerHTML = customername;

document.getElementById("googlemaps").innerHTML = googlemaps;



