document.addEventListener("DOMContentLoaded", function () {
    // Language toggle
    document.getElementById("lang-toggle").addEventListener("click", function () {
        let currentLang = document.documentElement.lang;
        if (currentLang === 'en') {
            document.documentElement.lang = 'fr';
            alert("Language switched to French");
        } else if (currentLang === 'fr') {
            document.documentElement.lang = 'ht';
            alert("Lang switched to Kreyol");
        } else {
            document.documentElement.lang = 'en';
            alert("Language switched to English");
        }
    });
});
