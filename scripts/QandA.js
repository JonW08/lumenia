async function fetchProducts() {
    try {
        const response = await fetch('QandA.json');
        if (!response.ok) {
            throw new Error('Kunne ikke laste QandA.json');
        }
        const spørsmål = await response.json();
        generer_QandA(spørsmål); 
    } catch (error) {
        console.error('Feil ved henting av spørsmål:', error);
    }
}

function generer_QandA(spørsmål) { 
    const QandA_liste = document.getElementById('QandA_id');

    spørsmål.forEach(QandA => {
        const QandA_card = document.createElement('div');
        QandA_card.classList.add('card');

        QandA_card.innerHTML = `
            <div class="spørsmål" onclick="vis_svar()">${QandA.spørsmål}</div>
            <div class="svar">${QandA.svar}</div>
        `;

        QandA_liste.appendChild(QandA_card);
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

