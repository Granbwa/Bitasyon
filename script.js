document.addEventListener('DOMContentLoaded', function() {
    // Language toggle button click event
    const langToggle = document.getElementById('lang-toggle');

    langToggle.addEventListener('click', function() {
        const currentLang = langToggle.innerText;

        // Switch the language between English, French, and Kreyol
        if (currentLang === "Fr | Kreyol") {
            langToggle.innerText = "EN | English";
            switchToFrenchKreyol();
        } else {
            langToggle.innerText = "Fr | Kreyol";
            switchToEnglish();
        }
    });

    // Function to change text to French/Kreyol
    function switchToFrenchKreyol() {
        document.querySelectorAll('.lang-home').forEach(function(el) {
            el.innerText = 'Accueil';
        });
        document.querySelectorAll('.lang-about').forEach(function(el) {
            el.innerText = 'À Propos';
        });
        document.querySelectorAll('.lang-services').forEach(function(el) {
            el.innerText = 'Services';
        });
        document.querySelectorAll('.lang-contact').forEach(function(el) {
            el.innerText = 'Contact';
        });
        document.querySelectorAll('.lang-header').forEach(function(el) {
            el.innerText = 'Granbwa';
        });
        document.querySelectorAll('.lang-tagline').forEach(function(el) {
            el.innerText = 'Votre partenaire de confiance en gestion de construction et de propriétés.';
        });
        document.querySelectorAll('.lang-welcome').forEach(function(el) {
            el.innerText = 'Bienvenue à Granbwa';
        });
        document.querySelectorAll('.lang-home-description').forEach(function(el) {
            el.innerText = 'Granbwa opère avec précision, assurant un service de qualité en gestion immobilière.';
        });
        document.querySelectorAll('.lang-about-header').forEach(function(el) {
            el.innerText = 'À propos de nous';
        });
        document.querySelectorAll('.lang-about-description').forEach(function(el) {
            el.innerText = 'Granbwa a été fondée avec l\'engagement de fournir une gestion immobilière de qualité militaire.';
        });
        document.querySelectorAll('.lang-services-header').forEach(function(el) {
            el.innerText = 'Nos Services';
        });
        document.querySelectorAll('.lang-services-description').forEach(function(el) {
            el.innerText = 'Nous offrons une gamme complète de services adaptés à vos besoins en gestion immobilière :';
        });
        document.querySelectorAll('.lang-ad-header').forEach(function(el) {
            el.innerText = 'Exécutif en Construction - Services de Gestion Immobilière et Rénovation';
        });
        document.querySelectorAll('.lang-ad-description').forEach(function(el) {
            el.innerText = 'Vous cherchez un professionnel de confiance pour gérer vos projets de construction et vos besoins immobiliers ? Granbwa offre des services spécialisés...';
        });
    }

    // Function to switch back to English
    function switchToEnglish() {
        document.querySelectorAll('.lang-home').forEach(function(el) {
            el.innerText = 'Home';
        });
        document.querySelectorAll('.lang-about').forEach(function(el) {
            el.innerText = 'About';
        });
        document.querySelectorAll('.lang-services').forEach(function(el) {
            el.innerText = 'Services';
        });
        document.querySelectorAll('.lang-contact').forEach(function(el) {
            el.innerText = 'Contact';
        });
        document.querySelectorAll('.lang-header').forEach(function(el) {
            el.innerText = 'Granbwa';
        });
        document.querySelectorAll('.lang-tagline').forEach(function(el) {
            el.innerText = 'Your trusted partner in construction management and property oversight.';
        });
        document.querySelectorAll('.lang-welcome').forEach(function(el) {
            el.innerText = 'Welcome to Granbwa';
        });
        document.querySelectorAll('.lang-home-description').forEach(function(el) {
            el.innerText = 'Granbwa operates with precision, ensuring quality service in property management.';
        });
        document.querySelectorAll('.lang-about-header').forEach(function(el) {
            el.innerText = 'About Us';
        });
        document.querySelectorAll('.lang-about-description').forEach(function(el) {
            el.innerText = 'Granbwa was founded on a commitment to delivering military-grade property management.';
        });
        document.querySelectorAll('.lang-services-header').forEach(function(el) {
            el.innerText = 'Our Services';
        });
        document.querySelectorAll('.lang-services-description').forEach(function(el) {
            el.innerText = 'We offer a comprehensive range of services tailored to your property management needs:';
        });
        document.querySelectorAll('.lang-ad-header').forEach(function(el) {
            el.innerText = 'Construction Executive - Property Management and Renovation Services';
        });
        document.querySelectorAll('.lang-ad-description').forEach(function(el) {
            el.innerText = 'Looking for a trusted professional to manage your construction projects and property needs? Granbwa offers specialized services...';
        });
    }
});
