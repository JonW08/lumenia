async function fetchProducts() {
    try {
        const response = await fetch('JsonFiler/sponsor.json');
        if (!response.ok) {
            throw new Error('Kunne ikke laste sponsor.json');
        }
        const spørsmål = await response.json();
        generer_QandA(spørsmål); 
    } catch (error) {
        console.error('Feil ved henting av informasjon', error);
    }
}
fetchProducts();
// ignorer at variablene heiter QandA, det er fordi jeg kopierte fra QandA.js, og gadd ikke endre det
function generer_QandA(spørsmål) { 
    alert("yo")
    const sponsor_liste = document.getElementById('sponsor_liste');

    spørsmål.forEach(QandA => {
        const QandA_card = document.createElement('div');
        QandA_card.classList.add('card');

        QandA_card.innerHTML = `
            <div class="takk" onclick="window.location.href = '${QandA.link}'">
            <h2>${QandA.Navn}</h2>
            <img class="bilde_sponsor" src="${QandA.image}" style="width: 80%; height: auto;">
            </div>
        `;

        sponsor_liste.appendChild(QandA_card);
    });
}


function vis_svar() {
    
    const spørsmålElement = event.target;
    const svarElement = spørsmålElement.nextElementSibling;

    if (svarElement.style.display === 'block') {
        svarElement.style.display = 'none';
    } else {
        svarElement.style.display = 'block';
    }

}