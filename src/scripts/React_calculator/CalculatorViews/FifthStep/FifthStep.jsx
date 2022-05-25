import Input from "../../CalculatorComponents/Input/Input";
import style from "./style.module.css";
import cn from "classnames";

const FifthStep = ({ dispatch, action, value }) => {
  return (
    <div className={cn(style.fifthStep__Container, "animation-0")}>
      <form>
        <Input
          type="number"
          label="Сколько у вас Комнат?"
          placeholder="Введите цифру"
          click={dispatch}
          action={action}
          value={value}
        />
      </form>
    </div>
  );
};
export default FifthStep;
