import * as style from "./style.module.css";
import Button from "../../CalculatorComponents/Button/Button.jsx";
import Input from "../../CalculatorComponents/Input/Input";
import cn from "classnames";

const FinalStep = ({ dispatch, action, value }) => {
  return (
    <div className={cn(style.finalStep__Container, "animation-3")}>
      <Input
        required={true}
        minLength="11"
        maxLength="11"
        type="tel"
        placeholder="Ваш телефон"
        click={dispatch}
        action={action}
        value={value?.phone}
        pattern="^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$"
      />
      <span>Пример: 89181234567</span>
      <Button
        name={
          value.sendOptions.successSent
            ? "Скоро перезвоним!"
            : "Получить расчет"
        }
        click={dispatch}
        action="sendData"
        isDisabled={value.sendOptions.isDisabledButton}
      />
    </div>
  );
};
export default FinalStep;
