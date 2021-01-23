import '../styles/styles.css';
import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';

if (module.hot) {
    module.hot.accept();
}

let mobileMenu = new MobileMenu();
new RevealOnScroll(document.querySelectorAll('.feature-item'), 100);
new RevealOnScroll(document.querySelectorAll('.testimonial'), 90);

