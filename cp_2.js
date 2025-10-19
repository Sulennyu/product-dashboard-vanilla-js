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
