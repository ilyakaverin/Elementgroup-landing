import Input from "../../CalculatorComponents/Input/Input.jsx";
import style from "./style.module.css";
import cn from "classnames";

const ThirdStep = ({ dispatch, action, value }) => {
  return (
    <div className={cn(style.thirdStep__Container, "animation-0")}>
      <h3>Общая площадь помещения</h3>
      <Input
        type="range"
        min="1"
        max="200"
        label="Площадь помещения"
        click={dispatch}
        action={action}
        isChecked={value}
      />
      <p>{value} кв. м</p>
    </div>
  );
};
export default ThirdStep;
