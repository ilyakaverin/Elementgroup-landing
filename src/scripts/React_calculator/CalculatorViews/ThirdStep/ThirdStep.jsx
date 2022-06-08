import Input from "../../CalculatorComponents/Input/Input.jsx";
import * as style from "./style.module.css";
import cn from "classnames";

const ThirdStep = ({ dispatch, action, value }) => {
  return (
    <div className={cn(style.thirdStep__Container, "animation-3")}>
      <form>
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
        <span>{value} кв. м</span>
      </form>

      <p>
        Если не знаете точную площадь, укажите приблизительную. Площадь влияет
        на общий объём работ и на количество материалов.
      </p>
    </div>
  );
};
export default ThirdStep;
