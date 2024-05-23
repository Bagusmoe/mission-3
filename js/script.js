// scripts.js
document.addEventListener('DOMContentLoaded', function () {
    const select = document.getElementById('countryCode');

    function updateFlag() {
        const selectedOption = select.options[select.selectedIndex];
        const flagCode = selectedOption.getAttribute('data-flag');
        select.style.backgroundImage = `url('https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.5.0/flags/4x3/${flagCode}.svg')`;
    }

    select.addEventListener('change', updateFlag);
    updateFlag();  // Set initial flag
});
