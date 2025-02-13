let bilde;
function h_bilde(v_bilde, v_h2) {
    bilde = v_bilde;
    h2 = v_h2;
    document.getElementById("pop_bilde").src = bilde;
    document.getElementById("pop_h2").innerHTML = h2 + " er lagt i handlekurven!";

}


function pop_up() {
    var popup = document.getElementById("popup");
    var Innhold = document.getElementById("popup-id");
    popup.style.display = "block";
    Innhold.style.display = "block";

}