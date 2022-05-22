var burgerBtn = document.getElementById("burger");
var burgerForm = document.querySelector(".nav");
var bodyForm = document.querySelector("body");
var filterBtn = document.getElementById("filter");
var filterBtnM = document.getElementById("filterM");
var filterForm = document.getElementById("accordionPanelsStayOpenExample");
var headerForm = document.querySelector("header");
var breadForm = document.getElementById("bread");
var bestsellersForm = document.getElementById("bestsellers");
var footerForm = document.getElementById("footer");
var resultForm = document.getElementById("result");


function showMenu() {
    burgerBtn.classList.toggle("actived");
    burgerForm.classList.toggle("actived");
    bodyForm.classList.toggle("lock")
}

function showFilter() {
    filterBtnM.classList.toggle("none");
    filterBtnM.classList.toggle("flex");
    filterBtn.classList.toggle("none");
    filterForm.classList.toggle("actived");
    headerForm.classList.toggle("none");
    breadForm.classList.toggle("none");
    bestsellersForm.classList.toggle("none");
    footerForm.classList.toggle("none");
    resultForm.classList.toggle("none")
}
function showFilterM() {
    filterBtn.classList.toggle("none");
    filterBtnM.classList.toggle("none");
    filterBtnM.classList.toggle("flex");
    filterForm.classList.toggle("actived");
    headerForm.classList.toggle("none");
    breadForm.classList.toggle("none");
    bestsellersForm.classList.toggle("none");
    footerForm.classList.toggle("none");
    resultForm.classList.toggle("none")
}