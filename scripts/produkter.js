
// Funksjon for å hente produkter fra en ekstern JSON-fil
async function fetchProducts() {
    
    try {
        const response = await fetch('JsonFiler/produkt.json');
        if (!response.ok) {
            
            throw new Error('Kunne ikke laste produkter.json');
            
        }
        const products = await response.json();
        displayProducts(products);
    } catch (error) {
        console.error('Feil ved henting av produkter:', error);
    }
}
const pageTitle = ""
// Funksjon for å legge til produkter i HTML
function displayProducts(products) {
    const productList = document.getElementById('pro');
    
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('card');
        productCard.value = product.name;
        productCard.Id = product.name;
        productCard.innerHTML = `
            <a href="InfoProdukt.html?produkt=${product.name}&pris=${product.price}&sk=${product.stripe_link}">
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <strong>${product.price}kr</strong>
            </a>
        `;
      
        productList.appendChild(productCard);

       
        
        
    });
}


// Kjør funksjonen for å hente og vise produktene
fetchProducts();


