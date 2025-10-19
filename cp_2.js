const API_URL = "https://www.course-api.com/javascript-store-products";
const container = document.getElementById("product-container");

// Retrieve data and log each products name

function fetchProductsThen() {
   fetch(API_URL)
   .then(response => response.json())
   .then (products => {
    products.forEach(product => {
        console.log(`Product: ${product.fields.name}`);
    });
   })
   .catch(error => console.error('failed to load product data:', error));

}

// Use fetchProductsAsync()
 
async function fetchProductsAsync() {
    try {
        const response = await fetch(API_URL);
        const products = await response.json();
        displayProducts(products);
    } catch (error) {
        handleError(error);
    }
}

// Write displayProducts(products)

function displayProducts(products) {
    container.innerHTML="";
    products.slice(0,5).forEach((p) => {
        const {name, price, image} = p.fields;
        const card = document.createElement("div");
        card.className = "product-card";
        card.innerHTML = `
        <img class= "product-image" src="${image}" alt="${name}">
        <div class= "product-name">${name}</div>
        <div class="product-price">$${(price/100).toFixed(2)}</div>
        `;
        container.appendChild(card);
    });
}

// Reusable handleError function

function handleError(error) {
    console.error(`An error Occured: ${error.message}`);
}

//Calling Functions

fetchProductsThen();
fetchProductsAsync();
