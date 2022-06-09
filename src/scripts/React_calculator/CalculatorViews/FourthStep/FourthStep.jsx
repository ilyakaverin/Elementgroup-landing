import Input from "../../CalculatorComponents/Input/Input.jsx";
import * as style from "./style.module.css";
import cn from "classnames";

const FourthStep = ({ dispatch, action, value }) => {
  return (
    <div className={cn(style.fourthStep__Container, "animation-3")}>
      <Input
        type="range"
        label="Какой у вас бюджет?(Примерно)"
        click={dispatch}
        action={action}
        value={value}
        min="500"
        max="10000"
      />
      <span>{value} тысяч рублей</span>
    </div>
  );
};
export default FourthStep;
