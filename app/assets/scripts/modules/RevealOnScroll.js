import throttle from 'lodash/throttle';
class RevealOnScroll {
    constructor () {
        this.itemsToReveal = document.querySelectorAll('.feature-item');
        this.hideInitially();
        this.scrollThrottle = throttle(this.calcCaller, 200).bind(this);
        this.events();
    }

    // Events method
    events () {
        window.addEventListener('scroll', this.scrollThrottle);
    }

    // Methods
    hideInitially () {
        this.itemsToReveal.forEach(element => {
            element.classList.add('reveal-item');
            element.isRevealed = false;
        });
        this.itemsToReveal[this.itemsToReveal.length - 1].isLastItem = true;
    }

    calcCaller () {
        this.itemsToReveal.forEach(element => {
            if (!element.isRevealed) {
                this.calculateIfScrolledTo(element);
            }
        })
    }

    calculateIfScrolledTo (element) {
        let scrollPercent = (element.getBoundingClientRect().y / window.innerHeight) * 100;

        if (scrollPercent < 100) {
            element.classList.add('reveal-item--is-visible');
            element.isRevealed = true;
            
            if (element.isLastItem) {
                window.removeEventListener('scroll', this.scrollThrottle);
            }
        }
    }
}

export default RevealOnScroll;