function sendCartEmail() {
    alert("Sending email...");
    
    let cart;
    try {
        cart = JSON.parse(localStorage.getItem('cart')) || [];
    } catch (error) {
        console.error("Error parsing cart:", error);
        return;
    }

    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }
        
    // Format the cart items into a readable list
    let emailBody = "Dette er min ordre:\n\n";
    cart.forEach((item, index) => {
        emailBody += `${index + 1}. ${item.produktnavn} - ${item.pris} NOK\n`;
    });

    // Encode for mailto
    let subject = encodeURIComponent("My Cart Order");
    let body = encodeURIComponent(emailBody);
    let email = "your-email@example.com";  // Change this to your email or leave empty for user input

    // Open mail client
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    
}
