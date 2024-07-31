/* le boutton de la page accueil */

document.getElementById('appelTexte').addEventListener('click', function() {
    const button = document.getElementById('appelTexte');
    button.innerHTML = '06 12 34 56 78';
    button.style.borderRadius = '5px'; // Pour que le bouton devienne rectangulaire une fois cliqué
});


// ********************************** le burger *****************************

document.addEventListener('DOMContentLoaded', function() {
    const burger = document.querySelector('.burger');
    const mobileMenu = document.querySelector('.mobile-menu');

    burger.addEventListener('click', function() {
        mobileMenu.classList.toggle('show');
        burger.classList.toggle('active');
    });
});
