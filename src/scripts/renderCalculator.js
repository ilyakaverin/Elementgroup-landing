import * as ReactDOMClient from "react-dom/client";
import Calculator from "./React_calculator/Calculator.jsx";

export default () => {

const calc = document.getElementById("calculator");
const root = ReactDOMClient.createRoot(calc);
root.render(<Calculator />);

}