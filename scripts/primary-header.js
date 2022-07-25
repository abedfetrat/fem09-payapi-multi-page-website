export default function PrimaryHeader(headerElement) {
    const nav = headerElement.querySelector('.js-primary-navigation');
    const menuToggle = headerElement.querySelector('.js-menu-toggle');
    menuToggle.addEventListener('click', toggleMenu);

    function toggleMenu() {
        const isToggled = headerElement.hasAttribute('data-menu-active');
        if (isToggled) {
            hideMenu();
        } else {
            showMenu();
        }
    }

    function showMenu() {
        headerElement.setAttribute('data-menu-active', '');
        menuToggle.setAttribute('aria-expanded', 'true');
        document.addEventListener('click', clickOutsideMenuListener);
    }

    function hideMenu() {
        headerElement.removeAttribute('data-menu-active');
        menuToggle.setAttribute('aria-expanded', 'false');
        document.removeEventListener('click', clickOutsideMenuListener);
    }

    function clickOutsideMenuListener(e) {
        var isClickOnToggle = menuToggle.contains(e.target);
        var isClickInsideNav = nav.contains(e.target);

        if (!isClickOnToggle && !isClickInsideNav) {
            hideMenu();
        }
    }
}