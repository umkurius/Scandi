var count = 1;
var number = document.getElementById("counter");
number.value = count;
function more() {
    count ++;
    number.value = count;
}
function less() {
    if ( count === 0 ) return;
    count --;
    number.value = count;
}

var count1 = 1;
var number1 = document.getElementById("counter1");
number1.value = count1;
function more1() {
    count1 ++;
    number1.value = count1;
}
function less1() {
    if ( count1 === 0 ) return;
    count1 --;
    number1.value = count1;
}


var closeBtn = document.querySelector("shopping_cart_close");
var firstForm = document.getElementById("first");
var secondForm = document.getElementById("second");

function closeFirst() {
    firstForm.classList.add("hide");
}
function closeSecond() {
    secondForm.classList.add("hide");
}