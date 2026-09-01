// Get modal elements
const modal = document.getElementById("paymentModal");
const orderBtn = document.getElementById("orderBtn");
const closeBtn = document.getElementsByClassName("close-btn")[0];

// Open modal when "Place Order" is clicked
orderBtn.onclick = function() {
    modal.style.display = "flex";
}

// Close modal when the "X" is clicked
closeBtn.onclick = function() {
    modal.style.display = "none";
}

// Close modal if user clicks outside of the modal box
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

