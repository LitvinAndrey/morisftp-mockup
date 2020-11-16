var burgerOpenedClass = 'opened';
var burgerIconSelector = 'burger-icon';
var leftContentSelector = 'left-content';
var opened = false;

function onToggle() {
    opened = !opened;
    var burgerIcon = document.querySelector(`.${burgerIconSelector}`);
    var leftContent = document.querySelector(`.${leftContentSelector}`);
    if (opened) {
        leftContent.classList.add(burgerOpenedClass);
        burgerIcon.classList.add(burgerOpenedClass);
    } else {
        leftContent.classList.remove(burgerOpenedClass);
        burgerIcon.classList.remove(burgerOpenedClass);
    }
}

function onExitClick() {
    window.location.href = 'sign-in.html';
}

function onSignIn() {
    window.location.href = 'index.html';
}
