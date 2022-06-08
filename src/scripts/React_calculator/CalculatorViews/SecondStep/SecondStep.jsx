import * as style from "./style.module.css";
import Input from "../../CalculatorComponents/Input/Input.jsx";
import cn from "classnames";
const SecondStep = ({ dispatch, action, value }) => {
  return (
    <div className={cn(style.secondStep__Container, "animation-3")}>
      <form className={style.secondStep__Form}>
        <h3>Нужен ли дизайн проект?</h3>
        <Input
          type="radio"
          name="radio2"
          value="Да"
          label="Да"
          click={dispatch}
          action={action}
          isChecked={value}
        />
        <Input
          type="radio"
          name="radio2"
          value="Нет"
          label="Нет"
          click={dispatch}
          action={action}
          isChecked={value}
        />
      </form>
      <p>
        Если у вас нет дизайн-проекта, наши дизайнеры помогут вам его составить.{" "}
      </p>
    </div>
  );
};
export default SecondStep;
