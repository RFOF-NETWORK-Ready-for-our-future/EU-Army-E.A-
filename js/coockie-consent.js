document.addEventListener('DOMContentLoaded', () => {
    const consentBanner = document.getElementById('cookie-consent-banner');
    const acceptAllBtn = document.getElementById('accept-all-cookies');
    const rejectAllBtn = document.getElementById('reject-all-cookies');
    const customizeBtn = document.getElementById('customize-cookies');
    const openSettingsBtn = document.getElementById('open-cookie-settings');

    const consentStatus = localStorage.getItem('cookieConsent');

    // Zeige das Banner, wenn der Benutzer noch nicht zugestimmt hat
    if (!consentStatus) {
        consentBanner.style.display = 'block';
    }

    function handleConsent(status) {
        localStorage.setItem('cookieConsent', status);
        consentBanner.style.display = 'none';

        if (status === 'accepted') {
            loadAnalyticsScripts();
        }
    }

    function loadAnalyticsScripts() {
        // Beispiel: Google Analytics oder andere Tracking-Skripte
        // Diese werden NUR hier geladen, nachdem der Benutzer zugestimmt hat
        const script = document.createElement('script');
        script.src = 'https://www.googletagmanager.com/gtag/js?id=UA-XXXXX-Y'; // Ersetzen Sie mit Ihrer ID
        document.head.appendChild(script);

        script.onload = () => {
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'UA-XXXXX-Y');
        };
        console.log('Externe Skripte geladen im Sinne der PZQQET-Axiome.');
    }

    acceptAllBtn.addEventListener('click', () => {
        handleConsent('accepted');
    });

    rejectAllBtn.addEventListener('click', () => {
        handleConsent('rejected');
    });

    // Die Funktion für die benutzerdefinierten Einstellungen müsste separat implementiert werden
    customizeBtn.addEventListener('click', () => {
        alert('Die Einstellungen werden noch codiert. Bitte wählen Sie vorerst eine der anderen Optionen.');
    });

    openSettingsBtn.addEventListener('click', () => {
        consentBanner.style.display = 'block';
    });
});
