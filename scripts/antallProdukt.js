function sjekk_kurv() {


    let kurv = 1;
    // Hent produkter fra localStorag
    let lagredeProdukter = localStorage.getItem("cart");

    // Sjekk om det finnes produkter
    if (lagredeProdukter) {
        let produkterArray = JSON.parse(lagredeProdukter); // Konverter fra JSON til array
        kurv = produkterArray.length; // Returner antall produkter
    } else {
        kurv = 1; // Hvis ingen produkter er lagret
    }
    document.getElementById("antall_i_kurv").dataset.value = kurv;

}


