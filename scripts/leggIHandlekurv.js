function LeggIKurven() {
    
        const parsedUrl = new URL(window.location.href);
        const produktnavn = parsedUrl.searchParams.get("produkt");
        const pris = parsedUrl.searchParams.get("pris");
        
    
        // Hent eksisterende handlekurv fra localStorage eller opprett en ny
        let cart;
        try {
            cart = JSON.parse(localStorage.getItem('cart')) || [];
        } catch (error) {
            console.error("Feil ved parsing av handlekurv:", error);
            cart = []; // Hvis parsing feiler, start med en tom liste
        }

        // Legg til produktet i handlekurven
        cart.push({ produktnavn, pris });
      
        // Lagre den oppdaterte handlekurven i localStorage
        localStorage.setItem('cart', JSON.stringify(cart));
        
        //alert(`${produktnavn} er lagt i handlekurven!`);
        
      
        

}


