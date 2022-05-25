import Input from "../../CalculatorComponents/Input/Input.jsx";
import style from "./style.module.css";
import cn from "classnames";

const FourthStep = ({ dispatch, action, value }) => {
  return (
    <div className={cn(style.fourthStep__Container, "animation-0")}>
      <Input
        type="number"
        placeholder="Пример: 1000000"
        label="Какой у вас бюджет?(Примерно)"
        click={dispatch}
        action={action}
        value={value}
      />
    </div>
  );
};
export default FourthStep;
