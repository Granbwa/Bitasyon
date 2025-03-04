document.addEventListener("DOMContentLoaded", function () {
    // Language toggle
    const toggleButton = document.getElementById("lang-toggle");
    toggleButton.addEventListener("click", function () {
        let currentLang = document.documentElement.lang;

        if (currentLang === 'en') {
            document.documentElement.lang = 'fr'; // Switch to French
            changeToFrench();
        } else if (currentLang === 'fr') {
            document.documentElement.lang = 'ht'; // Switch to Haitian Creole
            changeToCreole();
        } else {
            document.documentElement.lang = 'en'; // Switch to English
            changeToEnglish();
        }
    });

    function changeToEnglish() {
        // English Content
        document.querySelector('.lang-header').textContent = "Granbwa";
        document.querySelector('.lang-tagline').textContent = "Your trusted partner in construction management and property oversight.";
        document.querySelector('.lang-welcome').textContent = "Welcome to Granbwa";
        document.querySelector('.lang-home-description').textContent = "Granbwa operates with precision, ensuring quality service in property management. We integrate construction experience with strategic operations, offering tailored property management solutions to meet the unique needs of each client.";
        document.querySelector('.lang-about-header').textContent = "About Us";
        document.querySelector('.lang-about-description').textContent = "Granbwa was founded on a commitment to delivering military-grade property management.";
        document.querySelector('.lang-services-header').textContent = "Our Services";
        document.querySelector('.lang-services-description').textContent = "We offer a comprehensive range of services tailored to your property management needs:";
        document.querySelector('.lang-contact-header').textContent = "Contact Us";
        document.querySelector('.lang-contact-description').textContent = "If you have any questions, or if you’re interested in learning more about how Granbwa can assist you, don’t hesitate to get in touch:";
    }

    function changeToFrench() {
        // French Content
        document.querySelector('.lang-header').textContent = "Granbwa";
        document.querySelector('.lang-tagline').textContent = "Votre partenaire de confiance dans la gestion de la construction et la surveillance immobilière.";
        document.querySelector('.lang-welcome').textContent = "Bienvenue à Granbwa";
        document.querySelector('.lang-home-description').textContent = "Granbwa opère avec précision, garantissant un service de qualité dans la gestion immobilière. Nous intégrons l'expérience de la construction avec des opérations stratégiques, offrant des solutions de gestion immobilière adaptées aux besoins uniques de chaque client.";
        document.querySelector('.lang-about-header').textContent = "À Propos de Nous";
        document.querySelector('.lang-about-description').textContent = "Granbwa a été fondée avec l'engagement de fournir une gestion immobilière de qualité militaire.";
        document.querySelector('.lang-services-header').textContent = "Nos Services";
        document.querySelector('.lang-services-description').textContent = "Nous offrons une gamme complète de services adaptés à vos besoins en gestion immobilière :";
        document.querySelector('.lang-contact-header').textContent = "Contactez-Nous";
        document.querySelector('.lang-contact-description').textContent = "Si vous avez des questions ou si vous souhaitez en savoir plus sur la manière dont Granbwa peut vous aider, n'hésitez pas à nous contacter :";
    }

    function changeToCreole() {
        // Haitian Creole Content
        document.querySelector('.lang-header').textContent = "Granbwa";
        document.querySelector('.lang-tagline').textContent = "Patnè ou fè konfyans nan jere konstriksyon ak siveyans pwopriyete.";
        document.querySelector('.lang-welcome').textContent = "Byenveni nan Granbwa";
        document.querySelector('.lang-home-description').textContent = "Granbwa opere avèk presizyon, asire sèvis kalite nan jesyon pwopriyete. Nou entegre eksperyans konstriksyon ak operasyon estratejik, ofri solisyon jesyon pwopriyete adapte pou satisfè bezwen inik chak kliyan.";
        document.querySelector('.lang-about-header').textContent = "Sou Nou";
        document.querySelector('.lang-about-description').textContent = "Granbwa te fonde sou yon angajman pou bay jesyon pwopriyete nan nivo militè.";
        document.querySelector('.lang-services-header').textContent = "Sèvis Nou";
        document.querySelector('.lang-services-description').textContent = "Nou ofri yon seri sèvis konplè adapte pou bezwen jesyon pwopriyete ou yo :";
        document.querySelector('.lang-contact-header').textContent = "Kontakte Nou";
        document.querySelector('.lang-contact-description').textContent = "Si ou gen nenpòt kesyon, oswa si ou enterese aprann plis sou fason Granbwa ka ede ou, pa ezite kontakte nou:";
    }
});
