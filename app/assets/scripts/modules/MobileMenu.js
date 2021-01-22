class MobileMenu {
    constructor () {
        this.menuIcon = document.querySelector('.site-header__menu-icon');
        this.menuContent = document.querySelector('.site-header__menu-content');

        this.events();
    }

    // Events
    events () {
        this.menuIcon.addEventListener('click', () => this.toggleMenu());        
    }

    // Methods
    toggleMenu () {
        this.menuContent.classList.toggle('site-header__menu-content--is-visible');
    }
}

export default MobileMenu;