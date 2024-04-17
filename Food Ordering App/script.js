const menuItems = [
    { name: "Pizza", price: 10.99 },
    { name: "Burger", price: 8.99 },
    // Add more menu items as needed
];

// Array to store items in the cart
let cart = [];

// Function to add items to the cart
function addToCart(item) {
    cart.push(item);
    updateCartUI();
}

// Function to remove items from the cart
function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartUI();
}

// Function to update the cart UI
function updateCartUI() {
    const cartContainer = document.getElementById("cart-container");
    cartContainer.innerHTML = ""; // Clear previous content

    // Loop through items in the cart and create HTML elements for each item
    cart.forEach((item, index) => {
        const cartItemElement = document.createElement("div");
        cartItemElement.classList.add("cart-item");
        cartItemElement.innerHTML = `
            <h3 class="item-name">${item.name}</h3>
            <p class="item-price">$${item.price.toFixed(2)}</p>
            <button class="remove-from-cart" onclick="removeFromCart(${index})">Remove</button>
        `;
        cartContainer.appendChild(cartItemElement);
    });

    // Update total price
    const totalElement = document.getElementById("total");
    const totalPrice = cart.reduce((total, item) => total + item.price, 0);
    totalElement.textContent = Total: $${totalPrice.toFixed(2)};
}

// Function to handle checkout process
function checkout() {
    const name = document.getElementById("name").value;
    const address = document.getElementById("address").value;
    const email = document.getElementById("email").value;
    const payment = document.getElementById("payment").value;

    // Validation: Check if the cart is empty
    if (cart.length === 0) {
        alert("Your cart is empty. Please add items before proceeding to checkout.");
        return;
    }

    // Validation: Check if all fields are filled
    if (!name || !address || !email || !payment) {
        alert("Please fill in all fields.");
        return;
    }

    // Process the order (e.g., send data to a server, show confirmation message)
    alert(Thank you, ${name}! Your order has been placed.);
    // Optionally, you can clear the cart and reset the form fields here
    cart = [];
    updateCartUI();
    document.getElementById("checkout-form").reset();
}

// Event listener for form submission (checkout)
document.getElementById("checkout-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission behavior
    checkout();
});

// Function to handle login process
function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Validation: Check if username and password are correct (dummy check)
    if (username === "user" && password === "password") {
        alert("Login successful!");
        // Redirect to home page or perform other actions after successful login
    } else {
        alert("Invalid username or password. Please try again.");
    }
}

// Event listener for form submission (login)
document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission behavior
    login();
});

// Initial setup: Populate menu items
if (document.getElementById("menu-container")) {
    const menuContainer = document.getElementById("menu-container");
    menuItems.forEach(item => {
        const menuItemElement = document.createElement("div");
        menuItemElement.classList.add("menu-item");
        menuItemElement.innerHTML = `
            <h3 class="item-name">${item.name}</h3>
            <p class="item-price">$${item.price.toFixed(2)}</p>
            <button class="add-to-cart" onclick="addToCart(${JSON.stringify(item)})">Add to Cart</button>
        `;
        menuContainer.appendChild(menuItemElement);
    });
}

// Initial update of cart UI
updateCartUI();