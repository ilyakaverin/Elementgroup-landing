import cookie from "./scripts/cookie.js";
import animate from "./scripts/animations.js";
import headerForm from "./scripts/headerForm.js";
import * as ReactDOMClient from "react-dom/client";
import Calculator from "./scripts/Calculator";

const calc = document.getElementById("app");
const root = ReactDOMClient.createRoot(calc);


cookie();
animate();
headerForm();

root.render(<Calculator />);