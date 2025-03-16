function LeggIKurven(Er_and) {
        
    let parsedUrl = new URL(window.location.href);
    let produktnavn = parsedUrl.searchParams.get("produkt");
    let pris = parsedUrl.searchParams.get("pris"); 
    let stripe_link = parsedUrl.searchParams.get("sk");
if (Er_and == true) {
    produktnavn = "Badeand";
    pris = 89;
}





// Hent eksisterende handlekurv fra localStorage eller opprett en ny
let cart;
try {
    cart = JSON.parse(localStorage.getItem('cart')) || [];
} catch (error) {
    console.error("Feil ved parsing av handlekurv:", error);
    cart = []; // Hvis parsing feiler, start med en tom liste
}

// Legg til produktet i handlekurven
cart.push({ produktnavn, stripe_link, pris  });

// Lagre den oppdaterte handlekurven i localStorage
localStorage.setItem('cart', JSON.stringify(cart));

//alert(`${produktnavn} er lagt i handlekurven!`);
}

