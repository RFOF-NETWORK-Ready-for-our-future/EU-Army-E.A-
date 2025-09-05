document.addEventListener('DOMContentLoaded', () => {
    // Sanftes Scrollen zu Anker-Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Optionale weitere Skripte können hier hinzugefügt werden
    // Zum Beispiel Interaktionen, Animationen etc.
    console.log("Das RFOF-NETWORK ist aktiv und einsatzbereit.");
});
