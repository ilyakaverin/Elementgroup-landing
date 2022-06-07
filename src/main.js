import cookie from "./scripts/cookie.js";
import headerForm from "./scripts/headerForm.js";
import { scrollTo, scrollFunction } from './scripts/scroll.js';
import * as ReactDOMClient from "react-dom/client";
import Calculator from "./scripts/React_calculator/Calculator.jsx";

const calc = document.getElementById("calculator");
const topButton = document.querySelector(".arrow-up");

const root = ReactDOMClient.createRoot(calc);
window.onscroll = function() {scrollFunction(topButton)};
topButton.onclick = scrollTo;

const scrollToCalculator = document.querySelector(".arrow-down");
scrollToCalculator.addEventListener('click', () => {

    const element = document.getElementById('calculator');
    const position = element.getBoundingClientRect();
    const osX = position.left;
    const osY = position.top;
    scrollTo(osY, osX)
});




cookie();

root.render(<Calculator />);
