import { scrollTo, scrollFunction } from './scroll.js';
const topButton = document.querySelector(".arrow-up");

window.onscroll = function() {scrollFunction(topButton)};
topButton.onclick = scrollTo;