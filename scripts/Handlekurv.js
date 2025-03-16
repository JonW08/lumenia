function visprodukter() {
    // Hent handlekurv fra localStorage
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartDiv = document.getElementById('cart');
    const totalDiv = document.getElementById('total');
  
    if (!cartDiv || !totalDiv) {
      console.error("Elementene 'cart' og/eller 'total' finnes ikke i DOM-en.");
      return;
    }
  
    // Hvis handlekurven er tom
    if (cart.length === 0) {
      cartDiv.innerHTML = '<p>Handlekurven er tom.</p>';
      totalDiv.innerHTML = '';
      return;
    }
  
    // Vis alle produkter i handlekurven
    let total = 0;
    cartDiv.innerHTML = cart.map((item, index) => {
      total += parseFloat(item.pris); // Konverter pris til tall
      return `
        <div class="cart_item">
          <h2>${item.produktnavn} - ${item.pris} NOK</h2>
          
          <a class="kjøp" href=${item.stripe_link} target="_blank" onclick="removeItem(${index})">Kjøp her</a>
          <button onclick="removeItem(${index})">Fjern</button>
        </div>
      `;
    }).join('');
  
    // Vis totalpris
    totalDiv.innerHTML = `Total: ${total.toFixed(2)} NOK`;
  }
  
  // Fjern et produkt fra handlekurven
  function removeItem(index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.splice(index, 1); // Fjern elementet fra listen
    localStorage.setItem('cart', JSON.stringify(cart));
    visprodukter(); // Oppdater visningen
  }
  
  // Tøm handlekurven
  function clearCart() {
    localStorage.removeItem('cart');
    visprodukter(); // Oppdater visningen
  }
  
  // Kjør funksjonen når siden lastes
  document.addEventListener("DOMContentLoaded", () => {
    visprodukter();
  });