let bilde;
function h_bilde(v_bilde) {
    bilde = v_bilde;
    document.getElementById("pop_bilde").src = bilde;

}


function pop_up() {
    var popup = document.getElementById("popup");
    var Innhold = document.getElementById("popup-id");
    popup.style.display = "block";
    Innhold.style.display = "block";

}