// Select the language toggle button
const langToggleButton = document.getElementById('lang-toggle');

// Get the elements that correspond to different languages
const langFr = document.querySelectorAll('.lang-fr');
const langEn = document.querySelectorAll('.lang-en');
const langKreyo = document.querySelectorAll('.lang-kreyo');

// Set initial active language
let activeLang = 'fr';

// Function to switch languages
function switchLanguage(lang) {
    if (lang === 'fr') {
        langFr.forEach(el => el.classList.add('active'));
        langEn.forEach(el => el.classList.remove('active'));
        langKreyo.forEach(el => el.classList.remove('active'));
    } else if (lang === 'en') {
        langFr.forEach(el => el.classList.remove('active'));
        langEn.forEach(el => el.classList.add('active'));
        langKreyo.forEach(el => el.classList.remove('active'));
    } else if (lang === 'kreyo') {
        langFr.forEach(el => el.classList.remove('active'));
        langEn.forEach(el => el.classList.remove('active'));
        langKreyo.forEach(el => el.classList.add('active'));
    }
}

// Set default language (French)
switchLanguage('fr');

// Toggle between languages when the button is clicked
langToggleButton.addEventListener('click', () => {
    if (activeLang === 'fr') {
        activeLang = 'en';
        switchLanguage('en');
        langToggleButton.textContent = 'Fr | Kreyol';
    } else if (activeLang === 'en') {
        activeLang = 'kreyo';
        switchLanguage('kreyo');
        langToggleButton.textContent = 'Fr | En';
    } else {
        activeLang = 'fr';
        switchLanguage('fr');
        langToggleButton.textContent = 'En | Kreyol';
    }
});
