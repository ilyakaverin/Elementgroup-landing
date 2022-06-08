import cookie from "./scripts/cookie.js";
import sendForm from "./scripts/sendForm.js";
import scroll from "./scripts/scroll.js";
import * as ReactDOMClient from "react-dom/client";
import Calculator from "./scripts/React_calculator/Calculator.jsx";

const calc = document.getElementById("calculator");

const root = ReactDOMClient.createRoot(calc);

cookie();
sendForm();
scroll();

root.render(<Calculator />);
