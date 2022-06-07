import style from "./style.module.css";
import Input from "../../CalculatorComponents/Input/Input.jsx";
import cn from "classnames";

const FirstStep = ({ dispatch, action, value }) => {
  return (
    <div className={cn(style.firstStep__Container, "animation-3")}>

      <form className={style.firstStep__Form}>
      <h3>Где нужно сделать ремонт?</h3>
        <Input
          type="radio"
          name="radio1"
          value="Новостройка"
          label="Новостройка"
          click={dispatch}
          action={action}
          isChecked={value}
        />
        <Input
          type="radio"
          name="radio1"
          value="Вторичное жилье"
          label="Вторичное жилье"
          click={dispatch}
          action={action}
          isChecked={value}
        />
        <Input
          type="radio"
          name="radio1"
          value="Коммерческое помещение"
          label="Коммерческое помещение"
          click={dispatch}
          action={action}
          isChecked={value}
        />
      </form>
      <p>Тип жилья влияет на срок ремонта. Во вторичном жилье почти всегда требуется демонтаж. А в домах, построенных до 1970 года есть конструктивные особенности, из-за которых ремонт потребует больше времени.</p>
    </div>
  );
};
export default FirstStep;
