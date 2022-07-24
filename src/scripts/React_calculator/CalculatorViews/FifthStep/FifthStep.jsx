import Input from "../../CalculatorComponents/Input/Input";
import * as style from "./style.module.css";
import cn from "classnames";

const FifthStep = ({ dispatch, action, value }) => {
  return (
    <div className={cn(style.fifthStep__Container, "animation-3")}>
            <h3>Когда планируется ремонт?</h3>
           <form className={style.fifthStep__Form}>
        <Input
          type="radio"
          name="radio1"
          value="Чем скорее тем лучше"
          label="Чем скорее тем лучше"
          click={dispatch}
          action={action}
          isChecked={value}
        />
        <Input
          type="radio"
          name="radio1"
          value="В следующем месяце"
          label="В следующем месяце"
          click={dispatch}
          action={action}
          isChecked={value}
        />
        <Input
          type="radio"
          name="radio1"
          value="Через несколько месяцев"
          label="Через несколько месяцев"
          click={dispatch}
          action={action}
          isChecked={value}
        />
        <Input
          type="radio"
          name="radio1"
          value="Через полгода и более"
          label="Через полгода и более"
          click={dispatch}
          action={action}
          isChecked={value}
        />
      </form>
    </div>
  );
};
export default FifthStep;
