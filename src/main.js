import cookie from "./scripts/cookie.js";
import headerForm from "./scripts/headerForm.js";
import * as ReactDOMClient from "react-dom/client";
import Calculator from "./scripts/React_calculator/Calculator.jsx";

const calc = document.getElementById("app");
const root = ReactDOMClient.createRoot(calc);

cookie();
headerForm();

root.render(<Calculator />);
