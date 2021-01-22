class RevealOnScroll {
    constructor () {
        this.itemsToReveal = document.querySelectorAll('.feature-item');

        this.hideInitially();
        this.events();
    }

    // Events method
    events () {
        window.addEventListener('scroll', () => {
            this.itemsToReveal.forEach(element => {
                this.calculateIfScrolledTo(element);
            })
        })
    }

    // Methods
    hideInitially () {
        this.itemsToReveal.forEach(element => element.classList.add('reveal-item'));
    }

    calculateIfScrolledTo (element) {
        let scrollPercent = (element.getBoundingClientRect().y / window.innerHeight) * 100;

        if (scrollPercent < 100) {
            element.classList.add('reveal-item--is-visible');
        }
    }
}

export default RevealOnScroll;