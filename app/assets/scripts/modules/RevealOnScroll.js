import throttle from 'lodash/throttle';
import debounce from 'lodash/debounce';
class RevealOnScroll {
    constructor (targets, threshold) {
        this.itemsToReveal = targets;
        this.threshold = threshold;
        this.browserHeight = window.innerHeight;
        this.hideInitially();
        this.scrollThrottle = throttle(this.calcCaller, 200).bind(this);
        this.events();
    }

    // Events method
    events () {
        window.addEventListener('scroll', this.scrollThrottle);
        
        // Lodash debounce lets us call a function X miliseconds after the browser resize action ends
        window.addEventListener('resize', debounce(() => {
            this.browserHeight = window.innerHeight;
        }, 333));
    }

    // Methods
    hideInitially () {
        // Add the class to the items we want to reveal on scroll
        // And make them initially invisible
        this.itemsToReveal.forEach(element => {
            element.classList.add('reveal-item');
            element.isRevealed = false;
        });
        // Set a property to the last item, so we can check when the job is done
        this.itemsToReveal[this.itemsToReveal.length - 1].isLastItem = true;
    }

    calcCaller () {
        // If the element is still not revealed, calculate the remaining distance
        this.itemsToReveal.forEach(element => {
            if (!element.isRevealed) {
                this.calculateIfScrolledTo(element);
            }
        })
    }

    calculateIfScrolledTo (element) {
        // To save processing, only executes if the element is about to appear on scroll
        if (window.scrollY + this.browserHeight > element.offsetTop) {
            // Get the percentage
            let scrollPercent = (element.getBoundingClientRect().y / this.browserHeight) * 100;

            // If below desired, reveal it!
            if (scrollPercent < this.threshold) {
                element.classList.add('reveal-item--is-visible');
                element.isRevealed = true;
                
                // When the last item is revealed, remove the event listener to save processing
                if (element.isLastItem) {
                    window.removeEventListener('scroll', this.scrollThrottle);
                }
            }
        }
    }
}

export default RevealOnScroll;