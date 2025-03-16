
const parsedUrl = new URL(window.location.href);
const produktnavn = parsedUrl.searchParams.get("produkt");
const bilder = parsedUrl.searchParams.get("bilde");

async function fetchProducts() {
    try {
        const response = await fetch('produkt.json');
        if (!response.ok) {
            throw new Error('Kunne ikke laste produkter.json');
        }
        const products = await response.json();
        return products;
    } catch (error) {
        console.error('Feil ved henting av produkter:', error);
    }
}
let link = ""
function generer(products) {
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('card');
        productCard.value = product.name;
        productCard.id = product.name;
        
    });

    function getProduct() {
        const KvaProduct = products.find(item => item.name === produktnavn);
        return KvaProduct || { name: "Ingen produkter funnet." };
    }

    const KvaProduct = getProduct();
   
    
    link = KvaProduct.stripe_link
    document.getElementById("title").innerHTML = KvaProduct.name;
    document.getElementById("pris").innerHTML = KvaProduct.price+"kr";
    document.getElementById("BildeId").src = KvaProduct.image;
    document.getElementById("pop_bilde").src = KvaProduct.image;
    document.getElementById("merinfo").innerHTML = KvaProduct.moredescription;
    //h_bilde(KvaProduct.image,KvaProduct.name)

    console.log(link);
    console.log(fysikkProduct);
}
document.getElementById("betal_knapp").addEventListener("click", () => {
    if (link) {
        window.location.href = link;
    } else {
        alert("Betalingslink mangler!");
    }
});


fetchProducts().then(products => {
    if (products) {
        generer(products);
    }
});

