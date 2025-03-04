document.addEventListener("DOMContentLoaded", function() {
    const langToggleButton = document.getElementById('lang-toggle');
    const langFr = document.querySelectorAll('.lang-fr');
    const langEn = document.querySelectorAll('.lang-en');
    
    let activeLang = 'fr'; // Default language is French
    
    function switchLanguage(lang) {
        if (lang === 'fr') {
            langFr.forEach(el => el.classList.add('active'));
            langEn.forEach(el => el.classList.remove('active'));
        } else if (lang === 'en') {
            langFr.forEach(el => el.classList.remove('active'));
            langEn.forEach(el => el.classList.add('active'));
        }
    }
    
    // Initially load French
    switchLanguage('fr');
    
    // Toggle languages on button click
    langToggleButton.addEventListener('click', () => {
        if (activeLang === 'fr') {
            activeLang = 'en';
            switchLanguage('en');
            langToggleButton.textContent = 'Fr | En';
        } else {
            activeLang = 'fr';
            switchLanguage('fr');
            langToggleButton.textContent = 'En | Fr';
        }
    });
});
