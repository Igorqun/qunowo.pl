// scripts/app.js

document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const sectionID = event.target.getAttribute('href').substring(1);
        document.getElementById(sectionID).scrollIntoView({ behavior: 'smooth' });
    });
});
// Skrypt do aktywowania klikniętego przycisku w nawigacji
document.querySelectorAll('nav a.nav-button').forEach(button => {
    button.addEventListener('click', () => {
        // Usuń klasę 'active' z wszystkich przycisków
        document.querySelectorAll('nav a.nav-button').forEach(btn => btn.classList.remove('active'));
        // Dodaj klasę 'active' do klikniętego przycisku
        button.classList.add('active');
    });
});
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault(); // Zablokuj domyślną akcję
        window.location.href = this.getAttribute('href'); // Wykonaj nawigację za pomocą JS
    });
});
