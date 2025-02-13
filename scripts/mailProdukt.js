function send_order(){
    let list = [];
    total = 0
    var email = "jonweider07@gmail.com"
    let test = 0
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    test = cart.map((item, index) => {
        total += parseFloat(item.pris); // Konverter pris til tall
            list.push("order:   " + item.produktnavn + ": " + item.pris + "kr" + "-----------");
            document.getElementById("test").innerText = list

        })
    window.location.href = "mailto:" + email + "?subject=Order&body=" + list + "Total: " + total + "kr";
    
}