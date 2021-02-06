import '../styles/styles.css';
import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import StickyHeader from './modules/StickyHeader';


new MobileMenu();
new RevealOnScroll(document.querySelectorAll('.feature-item'), 100);
new RevealOnScroll(document.querySelectorAll('.testimonial'), 90);
new StickyHeader();
let modal;

document.querySelectorAll('.open-modal').forEach(element => {
  element.addEventListener('click', event => {
    event.preventDefault();
    if (typeof modal == 'undefined') {
      import(/* webpackChunkName: "modal" */ './modules/Modal').
        then( instance => {
          modal = new instance.default();
          setTimeout(() => modal.openTheModal(), 20);
        }).
        catch(() => console.log('There was a problem.'));
    } else {
      modal.openTheModal();
    }
  })
})


if (module.hot) {
    module.hot.accept();
}