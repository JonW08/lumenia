function LoadTekst(HvilkenTekst) {
fetch(HvilkenTekst) 
            .then(response => response.text())
            .then(text => {
                document.getElementById('content').textContent = text;
            })
            .catch(error => console.error('Error loading the file:', error));
};
