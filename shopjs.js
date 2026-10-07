// ========================================
// MOBILE MENU
// ========================================

// Find the hamburger button
const menuToggle =
    document.getElementById("menuToggle");

// Find the navigation menu
const navMenu =
    document.getElementById("navMenu");


// When hamburger button is clicked
menuToggle.addEventListener("click", function () {

    // Add/remove the "show" class
    navMenu.classList.toggle("show");

});


// ========================================
// SHOPPING CART
// ========================================

// Starting cart count
let cartCount = 0;

// Find the cart number
const cartNumber =
    document.querySelector(".cart span");

// Find all Add + buttons
const addButtons =
    document.querySelectorAll(".add-btn");


// Repeat for every Add + button
addButtons.forEach(function(button) {

    // When this button is clicked
    button.addEventListener("click", function() {

        // Increase cart count by 1
        cartCount++;

        // Update number displayed in the cart
        cartNumber.textContent = cartCount;

    });

});