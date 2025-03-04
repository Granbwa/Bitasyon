// Language toggle functionality
document.addEventListener('DOMContentLoaded', function() {
    const langToggle = document.getElementById('lang-toggle');
    const langElements = document.querySelectorAll('[class^="lang-"]');

    langToggle.addEventListener('click', function() {
        const currentLang = langToggle.textContent.trim();

        // Toggle language content
        langElements.forEach(element => {
            if (element.classList.contains('lang-en')) {
                element.style.display = (currentLang === 'Fr | Kreyol') ? 'none' : 'block';
            } else if (element.classList.contains('lang-fr')) {
                element.style.display = (currentLang === 'Fr | Kreyol') ? 'block' : 'none';
            } else if (element.classList.contains('lang-kreyo')) {
                element.style.display = (currentLang === 'Fr | Kreyol') ? 'block' : 'none';
            }
        });

        // Switch toggle text
        langToggle.textContent = (currentLang === 'Fr | Kreyol') ? 'En | Kreyol' : 'Fr | Kreyol';
    });
});
