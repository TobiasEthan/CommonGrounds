const hamMenu = document.querySelector('.hamNavigator');

const offScreenNavigator = document.querySelector('.offScreenNavigator');

hamMenu.addEventListener('click', () =>
    {
    offScreenNavigator.classList.toggle('active');
});