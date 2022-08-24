import * as style from "./style.module.css";
import Button from "../../CalculatorComponents/Button/Button.jsx";
import Input from "../../CalculatorComponents/Input/Input";
import cn from "classnames";

const FinalStep = ({ dispatch, action, value }) => {
  if (value.sent) {
    return (
      <div className={cn(style.finalStep__Container, "animation-3")}>
        <h3>Мы вам перезвоним!</h3>
      </div>
    );
  }
  return (
    <div className={cn(style.finalStep__Container, "animation-3")}>
      <h3>Введите номер телефона, мы с вами свяжемся и обсудим ваш проект!</h3> 
      <Input
        required={true}
        type="tel"
        placeholder="Ваш телефон"
        click={dispatch}
        action={action}
        value={value?.phone}
      />
      <span>Пример: 89181234567</span>
      <Button
        name={value.successSent ? "Скоро перезвоним!" : "Получить расчет"}
        click={dispatch}
        action="sendData"
        isDisabled={value.isDisabledButton}
      />
    </div>
  );
};
export default FinalStep;
