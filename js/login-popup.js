const loginButton = document.querySelector('.login-button');
const loginPopup = document.querySelector('.login-popup');

function showPopup(evt) {
    evt.preventDefault();
    loginPopup.classList.toggle('show-popup');
}

loginButton.addEventListener('click', showPopup);
