import style from "./style.module.css";
import Input from "../../CalculatorComponents/Input/Input.jsx";
const SecondStep = ({dispatch, action, value}) => {
  return (
    <div className={cn(style.secondStep__Container, 'animation-0')}>
      <h3>Нужен ли дизайн проект?</h3>
      <form className={style.secondStep__Form}>
        <Input type="radio"
         name="radio2"
         value="Да"
         label="Да"
         click={dispatch}
         action={action}
         isChecked={value} />
        <Input type="radio"
         name="radio2" 
         value="Нет" 
         label="Нет"
         click={dispatch}
         action={action}
         isChecked={value} />
      </form>
    </div>
  );
};
export default SecondStep;
