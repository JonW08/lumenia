async function fetchProducts() {
    try {
        const response = await fetch('JsonFiler/mail.json');
        if (!response.ok) {
            throw new Error('Kunne ikke laste QandA.json');
        }
        const spørsmål = await response.json();
        generer_QandA(spørsmål); 
    } catch (error) {
        console.error('Feil ved henting av spørsmål:', error);
    }
}
// ignorer at variablene heiter QandA, det er fordi jeg kopierte fra QandA.js, og gadd ikke endre det
function generer_QandA(spørsmål) { 
    const sponsor_liste = document.getElementById('content');

    spørsmål.forEach(QandA => {
        const QandA_card = document.createElement('div');
        QandA_card.classList.add('card');

        QandA_card.innerHTML = `
            <div class="kontaktmail">
            <a href="mailto:${QandA.mail}">${QandA.navn}</a>
            <img src="${QandA.bilde}" style="width: 80px; height: auto;">
            </div>
        `;

        sponsor_liste.appendChild(QandA_card);
    });
}
fetchProducts();

function vis_svar() {
    
    const spørsmålElement = event.target;
    const svarElement = spørsmålElement.nextElementSibling;

    if (svarElement.style.display === 'block') {
        svarElement.style.display = 'none';
    } else {
        svarElement.style.display = 'block';
    }

}