function HvilkenTekst(name) {
    fetch('JsonFiler/tekst.json')
        .then(response => response.json())
        .then(jsonData => {
            const item = jsonData.find(obj => obj.Navn === name);
            if (item) {
                document.getElementById("content").innerText = item.tekst;
            } else {
                document.getElementById("content").innerText = "No matching content found.";
            }
        })
        .catch(error => console.error('Error fetching JSON:', error));
}
 // Example usage: update content with "lorem"
// Example usage: update content with "lorem"

