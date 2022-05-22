var detailsBtn = document.getElementById("details");
var reviewsBtn = document.getElementById("reviews");
var deliveryBtn = document.getElementById("delivery");
var paymentBtn = document.getElementById("payment");

var detailsForm = document.querySelector(".tab_details_inner");
var reviewsForm = document.querySelector(".tab_reviews_inner");
var deliveryForm = document.querySelector(".tab_delivery_inner");
var paymentForm = document.querySelector(".tab_payment_inner");

function showDetails() {
    detailsBtn.classList.add("active");
    reviewsBtn.classList.remove("active");
    deliveryBtn.classList.remove("active");
    paymentBtn.classList.remove("active");
    detailsForm.classList.add("show");
    reviewsForm.classList.remove("showblock")
    deliveryForm.classList.remove("showblock");
    paymentForm.classList.remove("showblock");
}
function showReviews() {
    detailsBtn.classList.remove("active");
    reviewsBtn.classList.add("active");
    deliveryBtn.classList.remove("active");
    paymentBtn.classList.remove("active");
    detailsForm.classList.remove("show");
    reviewsForm.classList.add("showblock");
    deliveryForm.classList.remove("showblock");
    paymentForm.classList.remove("showblock");
}
function showDelivery() {
    detailsBtn.classList.remove("active");
    reviewsBtn.classList.remove("active");
    deliveryBtn.classList.add("active");
    paymentBtn.classList.remove("active");
    detailsForm.classList.remove("show");
    reviewsForm.classList.remove("showblock");
    deliveryForm.classList.add("showblock");
    paymentForm.classList.remove("showblock");
}
function showPayment() {
    detailsBtn.classList.remove("active");
    reviewsBtn.classList.remove("active");
    deliveryBtn.classList.remove("active");
    paymentBtn.classList.add("active");
    detailsForm.classList.remove("show");
    reviewsForm.classList.remove("showblock");
    deliveryForm.classList.remove("showblock");
    paymentForm.classList.add("showblock");
}